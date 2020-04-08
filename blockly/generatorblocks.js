function variableToName(value_name, func_name) {
  if(value_name.split('\n').filter(a => a != '').length == 1){
    if (/(gu|gd|gl|gt)/gi.test(value_name)) {
      value_name = value_name.replace(/(\(|\))/gi, "")
      value_name = `${value_name}`
    }
    else if (isNaN(parseInt(value_name)) && value_name != '') {
      value_name = func_name + "$" + value_name
    }  else {
      value_name = func_name + value_name
    }
  }  else {
    value_name = func_name + value_name
  }
  
  return value_name
}

Blockly.JavaScript['move_frente'] = function (block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `${variableToName(value_name, "MF")}\n`;
  return code;
};

Blockly.JavaScript['move_tras'] = function (block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `${variableToName(value_name, "MT")}\n`;
  return code;
};

Blockly.JavaScript['vira_esquerda'] = function (block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `${variableToName(value_name, "VE")}\n`;
  return code;
};

Blockly.JavaScript['vira_direita'] = function (block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `${variableToName(value_name, "VD")}\n`;
  return code;
};

Blockly.JavaScript['faz_nada'] = function (block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `${variableToName(value_name, "FN")}\n`;
  return code;
};

Blockly.JavaScript['buzzer_freq'] = function (block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `${variableToName(value_name, "BF")}\n`;
  return code;
};

Blockly.JavaScript['buzzer_toca'] = function (block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `${variableToName(value_name, "BT")}\n`;
  return code;
};

Blockly.JavaScript['get_luminosidade'] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = `GL\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['get_umidade'] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = `GU\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['get_temperatura'] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = `GT\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['get_distancia'] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = `GD\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['led_liga'] = function (block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `${variableToName(value_name, "LL")}\n`;

  return code;
};

Blockly.JavaScript['led_desliga'] = function (block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `${variableToName(value_name, "LL")}\n`;

  return code;
};

Blockly.JavaScript['block_if'] = function (block) {
  var value_se = Blockly.JavaScript.valueToCode(block, 'se', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_faca = Blockly.JavaScript.statementToCode(block, 'faca');
  value_se = value_se.split(",")
  // value_se[2] += (2 + statements_faca.split('\n').length)
  // TODO: Assemble JavaScript into code variable.
  var code = `${value_se.join('\n')}\n${statements_faca}FN$\n`;
  return code;
};


Blockly.JavaScript['block_if_else'] = function (block) {
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

Blockly.JavaScript['block_cond'] = function (block) {
  var value_cond1 = Blockly.JavaScript.valueToCode(block, 'cond1', Blockly.JavaScript.ORDER_ATOMIC).replace("\n", "").replace(/(\(|\))/g, '')
  var dropdown_comp = block.getFieldValue('comp');
  var value_cond2 = Blockly.JavaScript.valueToCode(block, 'cond2', Blockly.JavaScript.ORDER_ATOMIC).replace("\n", "").replace(/(\(|\))/g, '')

  value_cond2 = variableToName(value_cond2, variableToName(value_cond1, "LO") + "\nCM")
  
  var opcode = "";
  if (dropdown_comp == 'EQ') {
    opcode = "NE";
  } else if (dropdown_comp == 'DIF') {
    opcode = "JE";
  } else if (dropdown_comp == 'LS') {
    opcode = "GE";
  } else if (dropdown_comp == 'LE') {
    opcode = "JG";
  } else if (dropdown_comp == 'GT') {
    opcode = "LE";
  } else if (dropdown_comp == 'GE') {
    opcode = "JL";
  }
  // TODO: Assemble JavaScript into code variable.
  var code = [value_cond2, `${opcode}`]
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['block_math'] = function (block) {
  var value_math1 = Blockly.JavaScript.valueToCode(block, 'math1', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_op = block.getFieldValue('op');
  var value_math2 = Blockly.JavaScript.valueToCode(block, 'math2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  if (dropdown_op == 'PS') {
    value_math2 = variableToName(value_math2, variableToName(value_math1, "LO") + "\nAD");
  } else if (dropdown_op == 'MI') {
    value_math2 = variableToName(value_math2, variableToName(value_math1, "LO") + "\nSU");
  } else if (dropdown_op == 'ML') {
    value_math2 = variableToName(value_math2, variableToName(value_math1, "LO") + "\nMU");
  } else if (dropdown_op == 'DI') {
    value_math2 = variableToName(value_math2, variableToName(value_math1, "LO") + "\nDI");
  }
  var code = `${value_math2}\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['block_loop'] = function (block) {
  var value_cond = Blockly.JavaScript.valueToCode(block, 'cond', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.
  value_cond = value_cond.split(",")
  // value_se[2] += (2 + statements_faca.split('\n').length)
  // TODO: Assemble JavaScript into code variable.
  var code = `${value_cond.join('\n')}\n${statements_name}JM$\nFN$\n`;
  return code;
};

Blockly.JavaScript['block_repeat'] = function (block) {
  var value_times = Blockly.JavaScript.valueToCode(block, 'times', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  var var_name = Math.round(Math.random() * Date.now()).toString(16)
  value_times = variableToName(value_times, `LO$${var_name}\nCM`)
  var init = `var ${var_name}\n${var_name} = 0\n${value_times}\nGE$\nAD1\nST$${var_name}`
  // TODO: Assemble JavaScript into code variable.
  var code = `${init}\n${statements_name}JM$\nFN$\n`;
  return code;
};