Blockly.JavaScript['move_frente'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `MF${value_name}\n`;
  return code;
};

Blockly.JavaScript['move_tras'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `MT${value_name}\n`;
  return code;
};

Blockly.JavaScript['vira_esquerda'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `VE${value_name}\n`;
  return code;
};

Blockly.JavaScript['vira_direita'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `VD${value_name}\n`;
  return code;
};

Blockly.JavaScript['faz_nada'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `FN${value_name}\n`;
  return code;
};

Blockly.JavaScript['buzzer_freq'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `BF${value_name}\n`;
  return code;
};

Blockly.JavaScript['buzzer_toca'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `BT${value_name}\n`;
  return code;
};

Blockly.JavaScript['get_luminosidade'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = window.androidObj.textToAndroid("GL");
//  var teste = document.getElementById("teste");
//  teste.innerText = ["GL "+code];
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['get_umidade'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
   var code = window.androidObj.textToAndroid("GU");
//   var teste = document.getElementById("teste");
//   teste.innerText = ["GU "+code];
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['get_temperatura'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
   var code = window.androidObj.textToAndroid("GT");
//   var teste = document.getElementById("teste");
//   teste.innerText = ["GT "+code];
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['get_distancia'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
   var code = window.androidObj.textToAndroid("GD");
//   var teste = document.getElementById("teste");
//   teste.innerText = ["GD "+code];
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['led_liga'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `LL${value_name}\n`;
  return code;
};

Blockly.JavaScript['led_desliga'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `LD${value_name}\n`;
  return code;
};

Blockly.JavaScript['block_if'] = function(block) {
  var value_se = Blockly.JavaScript.valueToCode(block, 'se', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_faca = Blockly.JavaScript.statementToCode(block, 'faca');
  var comands = value_se.split(',');
  if(comands[1]== "EQ"){
    if(parseFloat(comands[0])== parseFloat(comands[2])){
      return statements_faca.trim()+"\n"
    }else{
      return "";
  }
  }else if(comands[1]=="NE"){
    if(parseFloat(comands[0])!= parseFloat(comands[2])){
      return statements_faca.trim()+"\n"
    }else{
        return "";
    }
  }else if(comands[1]=="LOW"){
    if(parseFloat(comands[0])< parseFloat(comands[2])){
      return statements_faca.trim()+"\n"
    }else{
      return "";
  }
  }else if(comands[1]=="LOWEQ"){
    if(parseFloat(comands[0])<= parseFloat(comands[2])){
      return statements_faca.trim()+"\n"
    }else{
      return "";
  }
  }else if(comands[1]=="BIG"){
    if(parseFloat(comands[0]) > parseFloat(comands[2])){
      return statements_faca.trim()+"\n"
    }else{
      return "";
  }
  }else if(comands[1]=="BIGEQ"){
    if(parseFloat(comands[0])>= parseFloat(comands[2])){
      return statements_faca.trim()+"\n"
    }else{
      return "";
  }
  }
};

Blockly.JavaScript['block_loop'] = function(block) {
  var value_cond = Blockly.JavaScript.valueToCode(block, 'cond', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');

  comands = value_cond.split(",")

    if(comands[1]== "EQ"){
     if(parseFloat(comands[0])== parseFloat(comands[2])){
         window.androidObj.textToAndroid((statements_name.trim().toString()+"\n"));
     }else{
       break;
    }
    }else if(comands[1]=="NE"){
     if(parseFloat(comands[0])!= parseFloat(comands[2])){
       window.androidObj.textToAndroid((statements_name.trim().toString()+"\n"));
     }else{
         break;
     }
    }else if(comands[1]=="LOW"){
     if(parseFloat(comands[0])< parseFloat(comands[2])){
       window.androidObj.textToAndroid((statements_name.trim().toString()+"\n"));
     }else{
      break;
    }
    }else if(comands[1]=="LOWEQ"){
     if(parseFloat(comands[0])<= parseFloat(comands[2])){
       window.androidObj.textToAndroid((statements_name.trim().toString()+"\n"));
     }else{
       break;
    }
    }else if(comands[1]=="BIG"){
     if(parseFloat(comands[0]) > parseFloat(comands[2])){
       window.androidObj.textToAndroid((statements_name.trim().toString()+"\n"));
     }else{
       break;
    }
    }else if(comands[1]=="BIGEQ"){
     if(parseFloat(comands[0])>= parseFloat(comands[2])){
       window.androidObj.textToAndroid((statements_name.trim().toString()+"\n"));
     }else{
       break;
    }
    }

};

Blockly.JavaScript['block_if_else'] = function(block) {
  var value_se = Blockly.JavaScript.valueToCode(block, 'se', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_faca1 = Blockly.JavaScript.statementToCode(block, 'faca1');
  var statements_faca2 = Blockly.JavaScript.statementToCode(block, 'faca2');
  
  comands = value_se.split(",")

  if(comands[1]== "EQ"){
    if(parseFloat(comands[0])== parseFloat(comands[2])){
      return statements_faca1.trim()+"\n"
    }else{
      return statements_faca2.trim()+"\n"
    }
  }else if(comands[1]=="NE"){
    if(parseFloat(comands[0])!= parseFloat(comands[2])){
      return statements_faca1.trim()+"\n"
      }else{
        return statements_faca2.trim()+"\n"
      }
  }else if(comands[1]=="LOW"){
    if(parseFloat(comands[0])< parseFloat(comands[2])){
      return statements_faca1.trim()+"\n"
    }else{
        return statements_faca2.trim()+"\n"
    }
  }else if(comands[1]=="LOWEQ"){
    if(parseFloat(comands[0])<= parseFloat(comands[2])){
      return statements_faca1.trim()+"\n"
    }else{
        return statements_faca2.trim()+"\n"
    }
  }else if(comands[1]=="BIG"){
    if(parseFloat(comands[0]) > parseFloat(comands[2])){
      return statements_faca1.trim()+"\n"
    }else{
      return statements_faca2.trim()+"\n"
    }
  }else if(comands[1]=="BIGEQ"){
    if(parseFloat(comands[0])>= parseFloat(comands[2])){
      return statements_faca1.trim()+"\n"
    }else{
      return statements_faca2.trim()+"\n"
    }
  }
};

Blockly.JavaScript['block_cond'] = function(block) {
  var value_cond1 = Blockly.JavaScript.valueToCode(block, 'cond1', Blockly.JavaScript.ORDER_NONE);
  var dropdown_comp = block.getFieldValue('comp');
  var value_cond2 = Blockly.JavaScript.valueToCode(block, 'cond2', Blockly.JavaScript.ORDER_ATOMIC);
  var load_cond1 = "";
  if(isNaN(parseInt(value_cond1))){
    load_cond1 = value_cond1.replace("\n", "");
  }else{
    load_cond1 = `${value_cond1}`;
  }

  var opcode = "";
  if(dropdown_comp == 'EQ'){
    opcode = "EQ";
  }else if(dropdown_comp == 'DIF'){
    opcode = "NE";
  }else if(dropdown_comp == 'LS'){
    opcode = "LOW";
  }else if(dropdown_comp == 'LE'){
    opcode = "LOWEQ";
  }else if(dropdown_comp == 'GT'){
    opcode = "BIG";
  }else if(dropdown_comp == 'GE'){
    opcode = "BIGEQ";
  }
  // TODO: Assemble JavaScript into code variable.
  var code = [load_cond1,`${opcode}`,`${value_cond2}`]
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['block_math'] = function(block) {
  var value_math1 = Blockly.JavaScript.valueToCode(block, 'math1', Blockly.JavaScript.ORDER_NONE);
  var dropdown_op = block.getFieldValue('op');
  var value_math2 = Blockly.JavaScript.valueToCode(block, 'math2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var opcode = "";
  var load_math1 = "";
  if(isNaN(parseInt(value_math1))){
    load_math1 = value_math1.replace("\n", "");
  }else{
    load_math1 = `${value_math1}`;
  }
  var code = "";
  if(dropdown_op == 'PS'){
    code = parseInt(load_math1)+parseInt(value_math2);
  }else if(dropdown_op == 'MI'){
    code = parseInt(load_math1)-parseInt(value_math2);
  }else if(dropdown_op == 'ML'){
    code = parseInt(load_math1)*parseInt(value_math2);
  }else if(dropdown_op == 'DI'){
    code = parseInt(load_math1)/parseInt(value_math2);
  }
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

