#include <SoftwareSerial.h>
#include <ArduinoBlue.h>
#include "DHT.h"
#include <Ultrasonic.h>

// BLUETOOTH
// Bluetooth TX -> Arduino D8
#define BLUETOOTH_TX 8
// Bluetooth RX -> Arduino D7
#define BLUETOOTH_RX 7

SoftwareSerial bluetooth(BLUETOOTH_TX, BLUETOOTH_RX);
ArduinoBlue phone(bluetooth);

//MOTORES
#define PEF 10 // motor esquerdo para frente
#define PEB 11 // motor esquerdo pra tras
#define PDF 12 // motor direito para frente
#define PDB 13 // motor direito para tras


//BUZZER
#define BUZZER 9
int freqBuzzer = 0;


//DHT - TEMPERATURA E HUMIDADE
#define DHTPIN 3    // what pin we're connected to
#define DHTTYPE DHT22   // DHT 22  (AM2302)
DHT dht(DHTPIN, DHTTYPE); //// Initialize DHT sensor for normal 16mhz Arduino

// ULTRASOM
//Define os pinos para o trigger e echo
#define PINTRIGGER 5
#define PINECHO 6

//Inicializa o sensor nos pinos definidos acima
Ultrasonic ultrasonic(PINTRIGGER, PINECHO);

//PHOTORESISTOR
#define PHOTO 0

//LEDS
int leds[] = {2, 4};


float AC = 0;
bool E = false;
bool L = false;
bool G = false;
int PC = 0;
bool EN = false;

void move_frente(int tempo) {
  //MF9900
  // tempo em segundos
  Serial.print("Indo pra frente por ");
  Serial.print(tempo);
  Serial.println(" segundos");
   digitalWrite(PDB, HIGH);
  digitalWrite(PDF, LOW);
  digitalWrite(PEF, LOW);
  digitalWrite(PEB, HIGH);
  delay(tempo * 1000);
  digitalWrite(PDB, LOW);
  digitalWrite(PDF, LOW);
  digitalWrite(PEF, LOW);
  digitalWrite(PEB, LOW);
}

void move_tras(int tempo) {
  //MT9900
  Serial.print("Indo pra tras por ");
  Serial.print(tempo);
  Serial.println(" segundos");

  digitalWrite(PDB, LOW);
  digitalWrite(PDF, HIGH);
  digitalWrite(PEF, HIGH);
  digitalWrite(PEB, LOW);
  delay(tempo * 1000);
  digitalWrite(PDB, LOW);
  digitalWrite(PDF, LOW);
  digitalWrite(PEF, LOW);
  digitalWrite(PEB, LOW);
  Serial.println("Carro parado!");
}

void vira_esquerda(int tempo) {
  //VE9900
  Serial.print("Virando para a esquerda por ");
  Serial.print(tempo);
  Serial.println(" segundos");

    digitalWrite(PDB, LOW);
  digitalWrite(PDF, HIGH);
  digitalWrite(PEF, LOW);
  digitalWrite(PEB, HIGH);
  delay(tempo * 1000);
  digitalWrite(PDB, LOW);
  digitalWrite(PDF, LOW);
  digitalWrite(PEF, LOW);
  digitalWrite(PEB, LOW);
  Serial.println("Carro parado!");
}

void vira_direita(int tempo) {
  //VD9900
  Serial.print("Virando para a direita por ");
  Serial.print(tempo);
  Serial.println(" segundos");


    digitalWrite(PDB, HIGH);
  digitalWrite(PDF, LOW);
  digitalWrite(PEF, HIGH);
  digitalWrite(PEB, LOW);
  delay(tempo * 1000);
  digitalWrite(PDB, LOW);
  digitalWrite(PDF, LOW);
  digitalWrite(PEF, LOW);
  digitalWrite(PEB, LOW);
  Serial.println("Carro parado!");
}

void faz_nada(int tempo) {
  //FN9900
  Serial.print("Fazendo nada por ");
  Serial.print(tempo);
  Serial.println(" segundos" );
  delay(tempo * 1000);
}

void buzzer_freq(int freq) {
  //BF1024
  Serial.print("Configurando frequencia do buzzer para frequencia de ");
  Serial.print(freq);
  Serial.println("hz");
  freqBuzzer = freq;
}

void buzzer_toca(int tempo) {
  //TB9900
  Serial.print("Tocando buzzer por ");
  Serial.print(tempo);
  Serial.println(" segundos" );
  tone(BUZZER, freqBuzzer);
  delay(tempo * 1000);
  noTone(BUZZER);
}

void get_luminosidade() {
  //GL0000
  Serial.print("Pegando luminosidade: ");
  int light = analogRead(PHOTO);
  Serial.println(light);
  AC = light;
}

void get_umidade() {
  //GU0000
  float hum = dht.readHumidity();
  Serial.print("Umidade: ");
  Serial.println(hum);
  AC = hum;
}

void get_temperatura() {
  //GT0000
  float temp = dht.readTemperature();
  Serial.print("Temperatura: ");
  Serial.println(temp);
  AC = temp;
}

void get_distancia() {
  // GD0000
  long microsec = ultrasonic.timing();
  float cmMsec = ultrasonic.convert(microsec, Ultrasonic::CM);

  //Exibe informacoes no serial monitor
  Serial.print("Distancia em cm: ");
  Serial.println(cmMsec);
  AC = cmMsec;
}

void led_liga(int pos) {
  //LL9900
  Serial.print("Ligando LED na posição: ");
  Serial.println(pos);
  digitalWrite(leds[pos], HIGH);
}

void led_desliga(int pos) {
  //LD9900
  Serial.print("Desligando LED na posição: ");
  Serial.println(pos);
  digitalWrite(leds[pos], LOW);
}

void cmp(int val) {
  //CM9999
  //  Serial.println("Comparando AC com o valor " , val );
  E = AC == val;
  L = AC < val;
  G = AC > val;
}

void jmp(int end) {
  //JM9999
  //  Serial.println("Pulando para o endereço " , end );
  PC = end;
}

void jne(int end) {
  //NE9999
  // Serial.println("Pulando caso seja diferente para o endereço " , end );
  if (!E) {
    PC = end;
  }
}

void je(int end) {
  //JE9999
  // Serial.println("Pulando caso seja igual para o endereço " , end );
  if (E) {
    PC = end;
  }
}

void jl(int end) {
  //JL9999
  // Serial.println("Pulando caso seja menor para o endereço " , end );
  if (L) {
    PC = end;
  }
}

void jg(int end) {
  //JG9999
  //   Serial.println("Pulando caso seja maior para o endereço " , end );
  if (G) {
    PC = end;
  }
}

void jge(int end) {
  //GE9999
  // Serial.println("Pulando caso seja maior ou igual para o endereço " , end );
  if (G && E) {
    PC = end;
  }
}

void jle(int end) {
  //LE9999
  // Serial.println("Pulando caso seja menor ou igual para o endereço " , end );
  if (L && E) {
    PC = end;
  }
}

void load(int end) {
  //LO9999
  // Serial.println("Carregando dado do endereço " , end );
  AC = end;
}

void store(int end) {
  //ST9999
  // Serial.println("Guardando dado no endereço " , end );
  end = AC;
}

void add(int val) {
  //AD9999
  //  Serial.println("Adicionando ao AC o valor " , val );
  AC = AC + val;
}

void sub(int val) {
  //SU9999
  // Serial.println("Subtraindo do AC o valor " , val );
  AC = AC - val;
}

void divi(int val) {
  //DI9999
  //  Serial.println("Dividindo o AC pelo valor " , val );
  AC = AC / val;
}

void mul(int val) {
  // MU9999
  // Serial.println("Multiplicando o AC pelo valor " , val );
  AC = AC * val;
}

void execcommands(String op, int operando) {
  if (op == "MF") {
    move_frente(operando);
  } else if (op == "MT") {
    move_tras(operando);
  } else if (op == "VE") {
    vira_esquerda(operando);
  } else if (op == "VD") {
    vira_direita(operando);
  } else if (op == "FN") {
    faz_nada(operando);
  } else if (op == "BF") {
    buzzer_freq(operando);
  } else if (op == "BT") {
    buzzer_toca(operando);
  } else if (op == "GL") {
    get_luminosidade();
  } else if (op == "GU") {
    get_umidade();
  } else if (op == "GT") {
    get_temperatura();
  } else if (op == "GD") {
    get_distancia();
  } else if (op == "LL") {
    led_liga(operando);
  } else if (op == "LD") {
    led_desliga(operando);
  } else if (op == "CM") {
    cmp(operando);
  } else if (op == "JM") {
    jmp(operando);
  } else if (op == "NE") {
    jne(operando);
  } else if (op == "JE") {
    je(operando);
  } else if (op == "JL") {
    jl(operando);
  } else if (op == "JG") {
    jg(operando);
  } else if (op == "GE") {
    jge(operando);
  } else if (op == "LE") {
    jle(operando);
  } else if (op == "LO") {
    load(operando);
  } else if (op == "ST") {
    store(operando);
  } else if (op == "AD") {
    add(operando);
  } else if (op == "SU") {
    sub(operando);
  } else if (op == "DI") {
    divi(operando);
  } else if (op == "MU") {
    mul(operando);
  } else {
    return;
  }
}


String buffercomandos[0];
String str;

void split(String str) {
  int pos = 0;
  for (int i = 0; i <= str.length(); i++) {
    if (str[i] == ';' || i == str.length()) {
      buffercomandos[i] = str.substring(pos, i++);
      pos = i;
      buffercomandos[i] = "\f";
      EN = true;
    }
  }
}

void setup() {
  // put your setup code here, to run once:

  Serial.begin(9600);
  bluetooth.begin(9600);
  dht.begin();

  delay(100);

  pinMode(PEF, OUTPUT);
  pinMode(PEB, OUTPUT);
  pinMode(PDF, OUTPUT);
  pinMode(PDB, OUTPUT);
  for (auto i : leds) {
    pinMode(i, OUTPUT);
  }

  
  pinMode(BUZZER  , OUTPUT);
  Serial.println("READY TO GO!");

  for(int i = 0; i < sizeof(buffercomandos); i++){
    buffercomandos[i] = "";
  }
  buffercomandos[0] = "VD2"; 
  buffercomandos[1] = "VD4"; 
  buffercomandos[2] = "\f";
  EN = true;
  return;
}

void loop() {
  // put your main code here, to run repeatedly:
  if (!EN) {
    str = phone.getText();
    if(str != ""){
       split(str);
    }
  } else {
    String com = buffercomandos[PC];
    if(com == "\f"){
      EN = false;
      PC = 0;
    }
    String opcode = com.substring(0, 2);
    int operando = com.substring(2).toInt();
    execcommands(opcode, operando);
    Serial.print(opcode);
    Serial.print(operando);
    Serial.println(com);
    PC++;
  }
}
