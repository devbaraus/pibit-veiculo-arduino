// DEFINIÇÃO

Blockly.Blocks['move_frente'] = {
    init: function() {
        this.appendValueInput("segundos")
            .setCheck("Number")
            .appendField("Mova para frente durante");
        this.appendDummyInput()
            .appendField("segundos");
        this.setInputsInline(true);
        this.setColour(230);
        this.setTooltip("Move para frente durante segundos");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['move_tras'] = {
    init: function() {
        this.appendValueInput("segundos")
            .setCheck("Number")
            .appendField("Move para trás durante");
        this.appendDummyInput()
            .appendField("segundos");
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// AÇÃO

Blockly.JavaScript['move_frente'] = function(block) {
    var value_segundos = Blockly.JavaScript.valueToCode(block, 'segundos', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = `MF${value_segundos}`;
    return code;
};

Blockly.JavaScript['move_tras'] = function(block) {
    var value_segundos = Blockly.JavaScript.valueToCode(block, 'segundos', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = `MF${value_segundos}`;
    return code;
};