(function (Scratch) {
    'use strict';
    const icon = 'data:image/svg+xml;base64,Qk2qBAAAAAAAADYAAAAoAAAAFAAAABMAAAABABgAAAAAAHQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeHh4';
    const icon2 = 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAV1dXenp6AAAAAAAAAAAAAAAAAAAAAAAAV1dXenp6AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA';
    class Consoles {
        constructor () {}
        getInfo() {
            return {
                id: 'sipcconsole',
                name: 'Consoles',
                color1: '#ff0000',
                color2: '#ff1100',
                color3: '#ff1111',
                menuIconURI: icon,
                blockIconURI: icon2,
                blocks: [
                    {
                        opcode: 'Emptying',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'Clear Console',
                        arguments: {}
                    },
                    {
                        opcode: 'Information',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'Information [string]',
                        arguments: {
                            string: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'Information'
                            }
                        }
                    },
                    {
                        opcode: 'Journal',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'Journal [string]',
                        arguments: {
                            string: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'Journal'
                            }
                        }
                    },
                    {
                        opcode: 'Warning',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'Warning [string]',
                        arguments: {
                            string: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'Warning'
                            }
                        }
                    },
                    {
                        opcode: 'Error',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'Error [string]',
                        arguments: {
                            string: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'Error'
                            }
                        }
                    },
                    {
                        opcode: 'debug',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'Debug [string]',
                        arguments: {
                            string: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'Debug'
                            }
                        }
                    },


                    '---',
                    {
                        opcode: 'group',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'Create a group named [string]',
                        arguments: {
                            string: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'group'
                            }
                        }
                    },
                    {
                        opcode: 'groupCollapsed',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'Create a collapsed group named [string]',
                        arguments: {
                            string: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'group'
                            }
                        }
                    },
                    {
                        opcode: 'groupEnd',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'Exit the current group',
                        arguments: {}
                    },
                    '---',
                    {
                        opcode: 'Timeron',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'Start a timer named [string]',
                        arguments: {
                            string: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'Time'
                            }
                        }
                    },
                    {
                        opcode: 'Timerlog',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'Print the time run by the timer named [string]',
                        arguments: {
                            string: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'Time'
                            }
                        }
                    },
                    {
                        opcode: 'Timeroff',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'End the timer named [string] and print the time elapsed from start to end',
                        arguments: {
                            string: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'Time'
                            }
                        }
                    },
                ]
            };
        }
        Emptying () {
            console.clear();
        }
        Information ({string}) {
            console.info(string);
        }
        Journal ({string}) {
            console.log(string);
        }
        Warning ({string}) {
            console.warn(string);
        }
        Error ({string}) {
            console.error(string);
        }
        debug ({string}) {
            console.debug(string);
        }
        group({string}) {
            console.group(string);
        }
        groupCollapsed({string}) {
            console.groupCollapsed(string);
        }
        groupEnd() {
            console.groupEnd();
        }
        Timeron ({string}) {
            console.time(string);
        }
        Timerlog ({string}) {
            console.timeLog(string);
        }
        Timeroff ({string}) {
            console.timeEnd(string);
        }

    }
    Scratch.extensions.register(new Consoles());
})(Scratch);