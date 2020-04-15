window.androidObj = function AndroidClass(){};
Blockly.Blocks['move_frente'] = {
  init: function () {
    this.appendValueInput("NAME")
      .setCheck("Number")
      .appendField("Move para frente durante");
    this.appendDummyInput()
      .appendField("segundos");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['move_tras'] = {
  init: function () {
    this.appendValueInput("NAME")
      .setCheck("Number")
      .appendField("Move para trás durante");
    this.appendDummyInput()
      .appendField("segundos");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['vira_esquerda'] = {
  init: function () {
    this.appendValueInput("NAME")
      .setCheck("Number")
      .appendField("Vira para a esquerda durante");
    this.appendDummyInput()
      .appendField("segundos");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['vira_direita'] = {
  init: function () {
    this.appendValueInput("NAME")
      .setCheck("Number")
      .appendField("Vira para a direita durante");
    this.appendDummyInput()
      .appendField("segundos");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['faz_nada'] = {
  init: function () {
    this.appendValueInput("NAME")
      .setCheck("Number")
      .appendField("Faz nada durante");
    this.appendDummyInput()
      .appendField("segundos");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['buzzer_freq'] = {
  init: function () {
    this.appendValueInput("NAME")
      .setCheck("Number")
      .appendField("Coloca a frequencia do buzzer para ");
    this.appendDummyInput()
      .appendField("Hz");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['get_luminosidade'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Pega luminosidade");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(260);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['get_umidade'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Pega umidade");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(260);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['get_temperatura'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Pega temperatura");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(260);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['get_distancia'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Pega distancia");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(260);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['led_liga'] = {
  init: function () {
    this.appendValueInput("NAME")
      .setCheck("Number")
      .appendField("Liga LED");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['led_desliga'] = {
  init: function () {
    this.appendValueInput("NAME")
      .setCheck("Number")
      .appendField("Desliga LED");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['block_if'] = {
  init: function () {
    this.appendValueInput("se")
      .setCheck("Boolean")
      .appendField("se");
    this.appendStatementInput("faca")
      .setCheck(null)
      .appendField("faça");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(21);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['block_if_else'] = {
  init: function () {
    this.appendValueInput("se")
      .setCheck("Boolean")
      .appendField("se");
    this.appendStatementInput("faca1")
      .setCheck(null)
      .appendField("faça");
    this.appendDummyInput()
      .appendField("senão");
    this.appendStatementInput("faca2")
      .setCheck(null)
      .appendField("faça");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(21);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['block_cond'] = {
  init: function () {
    this.appendValueInput("cond1")
      .setCheck("Number");
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([["==", "EQ"], ["!=", "DIF"], ["<", "LS"], ["<=", "LE"], [">", "GT"], [">=", "GE"]]), "comp");
    this.appendValueInput("cond2")
      .setCheck("Number");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(210);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['block_math'] = {
  init: function () {
    this.appendValueInput("math1")
      .setCheck("Number");
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([["+", "PS"], ["-", "MI"], ["/", "DI"], ["*", "ML"]]), "op");
    this.appendValueInput("math2")
      .setCheck("Number");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['buzzer_toca'] = {
  init: function () {
    this.appendValueInput("NAME")
      .setCheck("Number")
      .appendField("Toca buzzer durante");
    this.appendDummyInput()
      .appendField("segundos");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['block_loop'] = {
  init: function () {
    this.appendValueInput("cond")
      .setCheck("Boolean")
      .appendField("enquanto");
    this.appendStatementInput("NAME")
      .setCheck(null)
      .appendField("faça");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['block_repeat'] = {
  init: function () {
    this.appendValueInput("times")
      .setCheck("Number")
      .appendField("repita");
    this.appendDummyInput()
      .appendField("vezes");
    this.appendStatementInput("NAME")
      .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
