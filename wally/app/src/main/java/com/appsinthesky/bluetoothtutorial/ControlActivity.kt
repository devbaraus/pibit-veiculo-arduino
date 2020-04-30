package com.appsinthesky.bluetoothtutorial

import android.annotation.SuppressLint
import android.app.ProgressDialog
import android.bluetooth.BluetoothAdapter
import android.bluetooth.BluetoothDevice
import android.bluetooth.BluetoothSocket
import android.content.Context
import android.os.AsyncTask
import android.os.Build
import android.os.Bundle
import android.support.annotation.RequiresApi
import android.support.v7.app.AppCompatActivity
import android.util.Log
import android.webkit.*
import kotlinx.android.synthetic.main.control_layout.*
import java.io.IOException
import java.io.InputStream
import java.util.*


class ControlActivity : AppCompatActivity() {
    var sensor: Int = 0
    val TAG = "asinc"
    val BASE_URL = "file:///android_asset/index.html"

    companion object {
        var m_myUUID: UUID = UUID.fromString("00001101-0000-1000-8000-00805F9B34FB")
        var m_bluetoothSocket: BluetoothSocket? = null
        lateinit var m_progress: ProgressDialog
        lateinit var m_bluetoothAdapter: BluetoothAdapter
        var m_isConnected: Boolean = false
        lateinit var m_address: String
    }

    @SuppressLint("JavascriptInterface")
    @RequiresApi(Build.VERSION_CODES.O)
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.control_layout)

        control_getter.setOnClickListener {
            sendCommand("SG0000;HT0000;$\n")
            var text = receiveCommand()
            var array = text.split(";")
            getter_temperatura.text = "Temp: " + if (array[0].toString() == "NAN")  "0.0" else array[0].toString()
            getter_umidade.text =  "Umi: " + if (array[1].toString() == "NAN")  "0.0" else array[1].toString()
            getter_distancia.text = "Dist: " + if (array[2].toString() == "NAN")  "0.0" else array[2].toString()
            getter_luminosidade.text =  "Lum: " + if (array[3].toString() == "NAN")  "0.0" else array[3].toString()
        }

        //get information from the other activity
        m_address = intent.getStringExtra(SelectDeviceActivity.EXTRA_ADDRESS)

        //enable javascript
        webView.settings.javaScriptEnabled = true
        webView.webChromeClient = WebChromeClient()

        //javascript interface
        webView.addJavascriptInterface(JavaScriptInterface(), "javascriptInterface")

        //Load a url inside the webView
        webView.webViewClient = object : WebViewClient() {
            override fun shouldOverrideUrlLoading(view: WebView?, url: String?): Boolean {
                view?.loadUrl(url)
                return true
            }
        }
        //load the content
        webView.loadUrl("file:///android_asset/index.html")

        //zoom controll
        webView.settings.useWideViewPort = true
        webView.settings.builtInZoomControls = true

        try {
            ConnectToDevice(this).execute()
        } catch (e: IOException) {
            Log.d(TAG, "NAO CONECTADO")
            e.printStackTrace()
        }

        control_disconnect.setOnClickListener {
            disconnect()
        }

        webView.webViewClient = object : WebViewClient() {
            override fun onPageFinished(view: WebView, url: String) {
                injectJavaScriptFunction()
            }
        }
    }

    //go back with the application inside the webView or if there is no history close de app
    override fun onBackPressed() {
        if (webView.canGoBack()) {
            webView.goBack()
        } else {
            super.onBackPressed()
        }
    }

    //receive comands from arduino
    private fun receiveCommand(): String {
        try {
            var message: InputStream? = null
            message = m_bluetoothSocket!!.getInputStream()
            var received: Int
            var text = ""
            do {
                received = message.read()
                text += received.toChar().toString()
            } while (received != 0)
            return text
        } catch (e: IOException) {
            e.printStackTrace()
            return ""
        }
    }

    //sends comands through bluetooth
    private fun sendCommand(input: String) {
        if (m_bluetoothSocket != null) {
            try {
                m_bluetoothSocket!!.outputStream.write(input.toByteArray())
                Log.d(TAG, "ENVIADO")
            } catch (e: IOException) {
                e.printStackTrace()
                Log.d(TAG, "NAO ENVIADO")
            }
        } else {
            Log.d(TAG, "Não encontrei o socket --")
        }
    }

    //close the socket and disconnect from the device
    private fun disconnect() {
        if (m_bluetoothSocket != null) {
            try {
                m_bluetoothSocket!!.close()
                m_bluetoothSocket = null
                m_isConnected = false
            } catch (e: IOException) {
                e.printStackTrace()
            }
        }
        finish()
    }

    private class ConnectToDevice(c: Context) : AsyncTask<Void, Void, String>() {
        private var connectSuccess: Boolean = true
        private val context: Context

        init {
            this.context = c
        }

        override fun onPreExecute() {
            super.onPreExecute()
            m_progress = ProgressDialog.show(context, "Connecting...", "please wait")
        }

        override fun doInBackground(vararg p0: Void?): String? {
            try {
                if (m_bluetoothSocket == null || !m_isConnected) {
                    m_bluetoothAdapter = BluetoothAdapter.getDefaultAdapter()
                    val device: BluetoothDevice = m_bluetoothAdapter.getRemoteDevice(m_address)
                    m_bluetoothSocket = device.createInsecureRfcommSocketToServiceRecord(m_myUUID)
                    BluetoothAdapter.getDefaultAdapter().cancelDiscovery()
                    m_bluetoothSocket!!.connect()
                    Log.i("ERRO", "CONECTA")
                }
            } catch (e: IOException) {
                connectSuccess = false
                e.printStackTrace()
                Log.i("ERRO", "NAO CONECTA")
            }
            return null
        }

        //basically waits the async task finishes
        override fun onPostExecute(result: String?) {
            super.onPostExecute(result)
            if (!connectSuccess) {
                Log.i("data", "couldn't connect")
            } else {
                m_isConnected = true
                Log.i("data", "CONECTADO")
            }
            m_progress.dismiss()
        }
    }

    //method to do asynch   ronous tasks
    class doAsync(val handler: () -> Unit) : AsyncTask<Void, Void, Void>() {
        override fun doInBackground(vararg params: Void?): Void? {
            handler()
            return null
        }
    }

    //function to inject javascript in the webpage
    private fun injectJavaScriptFunction() {
        webView.loadUrl("javascript: " +
                "window.androidObj.textToAndroid = function(message) { " +
                "return javascriptInterface" + ".codeFromWeb(message)}")
    }


    private inner class JavaScriptInterface {
        @JavascriptInterface
        fun codeFromWeb(fromWeb: String): Int {
            val codigo = fromWeb
            val code = codigo.split("\n")
            Log.d("testo", code.toString())
            for (cod in code) {
                if (cod != ";" && cod != "") {
                    sendCommand(cod.trim() + "\n")
                    if (cod == "GL" || cod == "GU" || cod == "GT" || cod == "GD") {
                        receiveCommand()
                    }
                }
            }
            return sensor
        }
    }
}