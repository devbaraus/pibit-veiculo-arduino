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
  var code = `GL\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['get_umidade'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = `GU\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['get_temperatura'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = `GT\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['get_distancia'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = `GD\n`;
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
  value_se = value_se.split(",")
  // value_se[2] += (2 + statements_faca.split('\n').length)
  // TODO: Assemble JavaScript into code variable.
  var code = `${value_se.join('\n')}\n${statements_faca}FN$\n`;
  return code;
};


Blockly.JavaScript['block_if_else'] = function(block) {
  var value_se = Blockly.JavaScript.valueToCode(block, 'se', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_faca1 = Blockly.JavaScript.statementToCode(block, 'faca1');
  var statements_faca2 = Blockly.JavaScript.statementToCode(block, 'faca2');
  value_se = value_se.split(",")
  // selength = (2 + statements_faca1.split('\n').length)
  // value_se[2] += selength

  // TODO: Assemble JavaScript into code variable.
  var code = `${value_se.join('\n')}\n${statements_faca1}JM$\nFE$\n${statements_faca2}FN$\n`;
  return code;
  return code;
};

// Blockly.JavaScript['block_if_else'] = function(block) {
//   var value_se = Blockly.JavaScript.valueToCode(block, 'se', Blockly.JavaScript.ORDER_ATOMIC);
//   var statements_faca1 = Blockly.JavaScript.statementToCode(block, 'faca1');
//   var value_senao = Blockly.JavaScript.valueToCode(block, 'senao', Blockly.JavaScript.ORDER_ATOMIC);
//   var statements_faca2 = Blockly.JavaScript.statementToCode(block, 'faca2');
//   value_se = value_se.split(",")
//   // selength = (2 + statements_faca1.split('\n').length)
//   // value_se[2] += selength

//   value_senao = value_senao.split(",")
//   // value_senao[2] += (selength + 2 + statements_faca2.split('\n').length)
//   // TODO: Assemble JavaScript into code variable.
//   var code = `${value_se.join('\n')}\n${statements_faca1}${value_senao.join('\n')}\n${statements_faca2}`;
//   return code;
// };

Blockly.JavaScript['block_cond'] = function(block) {
  var value_cond1 = Blockly.JavaScript.valueToCode(block, 'cond1', Blockly.JavaScript.ORDER_NONE);
  var dropdown_comp = block.getFieldValue('comp');
  var value_cond2 = Blockly.JavaScript.valueToCode(block, 'cond2', Blockly.JavaScript.ORDER_ATOMIC);
  var load_cond1 = "";
  let inverted = false
  if(isNaN(parseInt(value_cond1)) &&  value_cond1 != ''){
    load_cond1 = value_cond1.replace("\n", "");
  }else{
    let aux = value_cond2
    value_cond2 = value_cond1
    value_cond1 = aux
    load_cond1 = value_cond1.replace("\n", "").replace(/(\(|\))/g, '');
    inverted = true
  }

  var opcode = "";
  if(dropdown_comp == 'EQ'){
    opcode = !inverted ? "NE" : "NE";
  }else if(dropdown_comp == 'DIF'){
    opcode = !inverted ? "JE" : "JE";
  }else if(dropdown_comp == 'LS'){
    opcode = !inverted ? "GE" : "JL";
  }else if(dropdown_comp == 'LE'){
    opcode = !inverted ? "JG" : "LE";
  }else if(dropdown_comp == 'GT'){
    opcode = !inverted ? "LE" : "GE";
  }else if(dropdown_comp == 'GE'){
    opcode = !inverted ? "JL" : "GE";
  }
  // TODO: Assemble JavaScript into code variable.
  var code = [load_cond1,`CM${value_cond2}`,`${opcode}`]
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
    load_math1 = `LO${value_math1}`;
  }
  if(dropdown_op == 'PS'){
    opcode = "AD";
  }else if(dropdown_op == 'MI'){
    opcode = "SU";
  }else if(dropdown_op == 'ML'){
    opcode = "MU";
  }else if(dropdown_op == 'DI'){
    opcode = "DI";
  }
  var code = `${load_math1}\n${opcode}${value_math2}\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['block_loop'] = function(block) {
  var value_cond = Blockly.JavaScript.valueToCode(block, 'cond', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.
  value_cond = value_cond.split(",")
  // value_se[2] += (2 + statements_faca.split('\n').length)
  // TODO: Assemble JavaScript into code variable.
  var code = `${value_cond.join('\n')}\n${statements_name}JM$\nFN$\n`;
  return code;
};