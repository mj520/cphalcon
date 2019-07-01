[
    {
        "type": "comment",
        "value": "**\n * This file is part of the Phalcon Framework.\n *\n * (c) Phalcon Team <team@phalconphp.com>\n *\n * For the full copyright and license information, please view the LICENSE.txt\n * file that was distributed with this source code.\n *",
        "file": "\/app\/phalcon\/Mvc\/Collection\/Behavior\/SoftDelete.zep",
        "line": 11,
        "char": 9
    },
    {
        "type": "namespace",
        "name": "Phalcon\\Mvc\\Collection\\Behavior",
        "file": "\/app\/phalcon\/Mvc\/Collection\/Behavior\/SoftDelete.zep",
        "line": 13,
        "char": 3
    },
    {
        "type": "use",
        "aliases": [
            {
                "name": "Phalcon\\Mvc\\CollectionInterface",
                "file": "\/app\/phalcon\/Mvc\/Collection\/Behavior\/SoftDelete.zep",
                "line": 13,
                "char": 36
            }
        ],
        "file": "\/app\/phalcon\/Mvc\/Collection\/Behavior\/SoftDelete.zep",
        "line": 14,
        "char": 3
    },
    {
        "type": "use",
        "aliases": [
            {
                "name": "Phalcon\\Mvc\\Collection\\Behavior",
                "file": "\/app\/phalcon\/Mvc\/Collection\/Behavior\/SoftDelete.zep",
                "line": 14,
                "char": 36
            }
        ],
        "file": "\/app\/phalcon\/Mvc\/Collection\/Behavior\/SoftDelete.zep",
        "line": 15,
        "char": 3
    },
    {
        "type": "use",
        "aliases": [
            {
                "name": "Phalcon\\Mvc\\Collection\\Exception",
                "file": "\/app\/phalcon\/Mvc\/Collection\/Behavior\/SoftDelete.zep",
                "line": 15,
                "char": 37
            }
        ],
        "file": "\/app\/phalcon\/Mvc\/Collection\/Behavior\/SoftDelete.zep",
        "line": 22,
        "char": 2
    },
    {
        "type": "comment",
        "value": "**\n * Phalcon\\Mvc\\Collection\\Behavior\\SoftDelete\n *\n * Instead of permanently delete a record it marks the record as\n * deleted changing the value of a flag column\n *",
        "file": "\/app\/phalcon\/Mvc\/Collection\/Behavior\/SoftDelete.zep",
        "line": 23,
        "char": 5
    },
    {
        "type": "class",
        "name": "SoftDelete",
        "abstract": 0,
        "final": 0,
        "extends": "Behavior",
        "definition": {
            "methods": [
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "notify",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "type",
                            "const": 0,
                            "data-type": "string",
                            "mandatory": 1,
                            "reference": 0,
                            "file": "\/app\/phalcon\/Mvc\/Collection\/Behavior\/SoftDelete.zep",
                            "line": 28,
                            "char": 40
                        },
                        {
                            "type": "parameter",
                            "name": "model",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "cast": {
                                "type": "variable",
                                "value": "CollectionInterface",
                                "file": "\/app\/phalcon\/Mvc\/Collection\/Behavior\/SoftDelete.zep",
                                "line": 28,
                                "char": 68
                            },
                            "reference": 0,
                            "file": "\/app\/phalcon\/Mvc\/Collection\/Behavior\/SoftDelete.zep",
                            "line": 28,
                            "char": 69
                        }
                    ],
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "options",
                                    "file": "\/app\/phalcon\/Mvc\/Collection\/Behavior\/SoftDelete.zep",
                                    "line": 30,
                                    "char": 20
                                },
                                {
                                    "variable": "value",
                                    "file": "\/app\/phalcon\/Mvc\/Collection\/Behavior\/SoftDelete.zep",
                                    "line": 30,
                                    "char": 27
                                },
                                {
                                    "variable": "field",
                                    "file": "\/app\/phalcon\/Mvc\/Collection\/Behavior\/SoftDelete.zep",
                                    "line": 30,
                                    "char": 34
                                },
                                {
                                    "variable": "updateModel",
                                    "file": "\/app\/phalcon\/Mvc\/Collection\/Behavior\/SoftDelete.zep",
                                    "line": 30,
                                    "char": 47
                                },
                                {
                                    "variable": "message",
                                    "file": "\/app\/phalcon\/Mvc\/Collection\/Behavior\/SoftDelete.zep",
                                    "line": 30,
                                    "char": 56
                                }
                            ],
                            "file": "\/app\/phalcon\/Mvc\/Collection\/Behavior\/SoftDelete.zep",
                            "line": 32,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "not-identical",
                                "left": {
                                    "type": "variable",
                                    "value": "type",
                                    "file": "\/app\/phalcon\/Mvc\/Collection\/Behavior\/SoftDelete.zep",
                                    "line": 32,
                                    "char": 19
                                },
                                "right": {
                                    "type": "string",
                                    "value": "beforeDelete",
                                    "file": "\/app\/phalcon\/Mvc\/Collection\/Behavior\/SoftDelete.zep",
                                    "line": 32,
                                    "char": 34
                                },
                                "file": "\/app\/phalcon\/Mvc\/Collection\/Behavior\/SoftDelete.zep",
                                "line": 32,
                                "char": 34
                            },
                            "statements": [
                                {
                                    "type": "return",
                                    "file": "\/app\/phalcon\/Mvc\/Collection\/Behavior\/SoftDelete.zep",
                                    "line": 34,
                                    "char": 9
                                }
                            ],
                            "file": "\/app\/phalcon\/Mvc\/Collection\/Behavior\/SoftDelete.zep",
                            "line": 36,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "options",
                                    "expr": {
                                        "type": "mcall",
                                        "variable": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/app\/phalcon\/Mvc\/Collection\/Behavior\/SoftDelete.zep",
                                            "line": 36,
                                            "char": 28
                                        },
                                        "name": "getOptions",
                                        "call-type": 1,
                                        "file": "\/app\/phalcon\/Mvc\/Collection\/Behavior\/SoftDelete.zep",
                                        "line": 36,
                                        "char": 41
                                    },
                                    "file": "\/app\/phalcon\/Mvc\/Collection\/Behavior\/SoftDelete.zep",
                                    "line": 36,
                                    "char": 41
                                }
                            ],
                            "file": "\/app\/phalcon\/Mvc\/Collection\/Behavior\/SoftDelete.zep",
                            "line": 41,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "unlikely",
                                "left": {
                                    "type": "not",
                                    "left": {
                                        "type": "fetch",
                                        "left": {
                                            "type": "variable",
                                            "value": "value",
                                            "file": "\/app\/phalcon\/Mvc\/Collection\/Behavior\/SoftDelete.zep",
                                            "line": 41,
                                            "char": 50
                                        },
                                        "right": {
                                            "type": "array-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "options",
                                                "file": "\/app\/phalcon\/Mvc\/Collection\/Behavior\/SoftDelete.zep",
                                                "line": 41,
                                                "char": 42
                                            },
                                            "right": {
                                                "type": "string",
                                                "value": "value",
                                                "file": "\/app\/phalcon\/Mvc\/Collection\/Behavior\/SoftDelete.zep",
                                                "line": 41,
                                                "char": 48
                                            },
                                            "file": "\/app\/phalcon\/Mvc\/Collection\/Behavior\/SoftDelete.zep",
                                            "line": 41,
                                            "char": 50
                                        },
                                        "file": "\/app\/phalcon\/Mvc\/Collection\/Behavior\/SoftDelete.zep",
                                        "line": 41,
                                        "char": 50
                                    },
                                    "file": "\/app\/phalcon\/Mvc\/Collection\/Behavior\/SoftDelete.zep",
                                    "line": 41,
                                    "char": 50
                                },
                                "file": "\/app\/phalcon\/Mvc\/Collection\/Behavior\/SoftDelete.zep",
                                "line": 41,
                                "char": 50
                            },
                            "statements": [
                                {
                                    "type": "throw",
                                    "expr": {
                                        "type": "new",
                                        "class": "Exception",
                                        "dynamic": 0,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "string",
                                                    "value": "The option 'value' is required",
                                                    "file": "\/app\/phalcon\/Mvc\/Collection\/Behavior\/SoftDelete.zep",
                                                    "line": 42,
                                                    "char": 63
                                                },
                                                "file": "\/app\/phalcon\/Mvc\/Collection\/Behavior\/SoftDelete.zep",
                                                "line": 42,
                                                "char": 63
                                            }
                                        ],
                                        "file": "\/app\/phalcon\/Mvc\/Collection\/Behavior\/SoftDelete.zep",
                                        "line": 42,
                                        "char": 64
                                    },
                                    "file": "\/app\/phalcon\/Mvc\/Collection\/Behavior\/SoftDelete.zep",
                                    "line": 43,
                                    "char": 9
                                }
                            ],
                            "file": "\/app\/phalcon\/Mvc\/Collection\/Behavior\/SoftDelete.zep",
                            "line": 48,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "unlikely",
                                "left": {
                                    "type": "not",
                                    "left": {
                                        "type": "fetch",
                                        "left": {
                                            "type": "variable",
                                            "value": "field",
                                            "file": "\/app\/phalcon\/Mvc\/Collection\/Behavior\/SoftDelete.zep",
                                            "line": 48,
                                            "char": 50
                                        },
                                        "right": {
                                            "type": "array-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "options",
                                                "file": "\/app\/phalcon\/Mvc\/Collection\/Behavior\/SoftDelete.zep",
                                                "line": 48,
                                                "char": 42
                                            },
                                            "right": {
                                                "type": "string",
                                                "value": "field",
                                                "file": "\/app\/phalcon\/Mvc\/Collection\/Behavior\/SoftDelete.zep",
                                                "line": 48,
                                                "char": 48
                                            },
                                            "file": "\/app\/phalcon\/Mvc\/Collection\/Behavior\/SoftDelete.zep",
                                            "line": 48,
                                            "char": 50
                                        },
                                        "file": "\/app\/phalcon\/Mvc\/Collection\/Behavior\/SoftDelete.zep",
                                        "line": 48,
                                        "char": 50
                                    },
                                    "file": "\/app\/phalcon\/Mvc\/Collection\/Behavior\/SoftDelete.zep",
                                    "line": 48,
                                    "char": 50
                                },
                                "file": "\/app\/phalcon\/Mvc\/Collection\/Behavior\/SoftDelete.zep",
                                "line": 48,
                                "char": 50
                            },
                            "statements": [
                                {
                                    "type": "throw",
                                    "expr": {
                                        "type": "new",
                                        "class": "Exception",
                                        "dynamic": 0,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "string",
                                                    "value": "The option 'field' is required",
                                                    "file": "\/app\/phalcon\/Mvc\/Collection\/Behavior\/SoftDelete.zep",
                                                    "line": 49,
                                                    "char": 63
                                                },
                                                "file": "\/app\/phalcon\/Mvc\/Collection\/Behavior\/SoftDelete.zep",
                                                "line": 49,
                                                "char": 63
                                            }
                                        ],
                                        "file": "\/app\/phalcon\/Mvc\/Collection\/Behavior\/SoftDelete.zep",
                                        "line": 49,
                                        "char": 64
                                    },
                                    "file": "\/app\/phalcon\/Mvc\/Collection\/Behavior\/SoftDelete.zep",
                                    "line": 50,
                                    "char": 9
                                }
                            ],
                            "file": "\/app\/phalcon\/Mvc\/Collection\/Behavior\/SoftDelete.zep",
                            "line": 55,
                            "char": 13
                        },
                        {
                            "type": "mcall",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "variable",
                                    "value": "model",
                                    "file": "\/app\/phalcon\/Mvc\/Collection\/Behavior\/SoftDelete.zep",
                                    "line": 55,
                                    "char": 15
                                },
                                "name": "skipOperation",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "bool",
                                            "value": "true",
                                            "file": "\/app\/phalcon\/Mvc\/Collection\/Behavior\/SoftDelete.zep",
                                            "line": 55,
                                            "char": 34
                                        },
                                        "file": "\/app\/phalcon\/Mvc\/Collection\/Behavior\/SoftDelete.zep",
                                        "line": 55,
                                        "char": 34
                                    }
                                ],
                                "file": "\/app\/phalcon\/Mvc\/Collection\/Behavior\/SoftDelete.zep",
                                "line": 55,
                                "char": 35
                            },
                            "file": "\/app\/phalcon\/Mvc\/Collection\/Behavior\/SoftDelete.zep",
                            "line": 60,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "equals",
                                "left": {
                                    "type": "mcall",
                                    "variable": {
                                        "type": "variable",
                                        "value": "model",
                                        "file": "\/app\/phalcon\/Mvc\/Collection\/Behavior\/SoftDelete.zep",
                                        "line": 60,
                                        "char": 18
                                    },
                                    "name": "readAttribute",
                                    "call-type": 1,
                                    "parameters": [
                                        {
                                            "parameter": {
                                                "type": "variable",
                                                "value": "field",
                                                "file": "\/app\/phalcon\/Mvc\/Collection\/Behavior\/SoftDelete.zep",
                                                "line": 60,
                                                "char": 38
                                            },
                                            "file": "\/app\/phalcon\/Mvc\/Collection\/Behavior\/SoftDelete.zep",
                                            "line": 60,
                                            "char": 38
                                        }
                                    ],
                                    "file": "\/app\/phalcon\/Mvc\/Collection\/Behavior\/SoftDelete.zep",
                                    "line": 60,
                                    "char": 41
                                },
                                "right": {
                                    "type": "variable",
                                    "value": "value",
                                    "file": "\/app\/phalcon\/Mvc\/Collection\/Behavior\/SoftDelete.zep",
                                    "line": 60,
                                    "char": 49
                                },
                                "file": "\/app\/phalcon\/Mvc\/Collection\/Behavior\/SoftDelete.zep",
                                "line": 60,
                                "char": 49
                            },
                            "statements": [
                                {
                                    "type": "return",
                                    "file": "\/app\/phalcon\/Mvc\/Collection\/Behavior\/SoftDelete.zep",
                                    "line": 62,
                                    "char": 9
                                }
                            ],
                            "file": "\/app\/phalcon\/Mvc\/Collection\/Behavior\/SoftDelete.zep",
                            "line": 67,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "updateModel",
                                    "expr": {
                                        "type": "clone",
                                        "left": {
                                            "type": "variable",
                                            "value": "model",
                                            "file": "\/app\/phalcon\/Mvc\/Collection\/Behavior\/SoftDelete.zep",
                                            "line": 67,
                                            "char": 38
                                        },
                                        "file": "\/app\/phalcon\/Mvc\/Collection\/Behavior\/SoftDelete.zep",
                                        "line": 67,
                                        "char": 38
                                    },
                                    "file": "\/app\/phalcon\/Mvc\/Collection\/Behavior\/SoftDelete.zep",
                                    "line": 67,
                                    "char": 38
                                }
                            ],
                            "file": "\/app\/phalcon\/Mvc\/Collection\/Behavior\/SoftDelete.zep",
                            "line": 69,
                            "char": 19
                        },
                        {
                            "type": "mcall",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "variable",
                                    "value": "updateModel",
                                    "file": "\/app\/phalcon\/Mvc\/Collection\/Behavior\/SoftDelete.zep",
                                    "line": 69,
                                    "char": 21
                                },
                                "name": "writeAttribute",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "field",
                                            "file": "\/app\/phalcon\/Mvc\/Collection\/Behavior\/SoftDelete.zep",
                                            "line": 69,
                                            "char": 42
                                        },
                                        "file": "\/app\/phalcon\/Mvc\/Collection\/Behavior\/SoftDelete.zep",
                                        "line": 69,
                                        "char": 42
                                    },
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "value",
                                            "file": "\/app\/phalcon\/Mvc\/Collection\/Behavior\/SoftDelete.zep",
                                            "line": 69,
                                            "char": 49
                                        },
                                        "file": "\/app\/phalcon\/Mvc\/Collection\/Behavior\/SoftDelete.zep",
                                        "line": 69,
                                        "char": 49
                                    }
                                ],
                                "file": "\/app\/phalcon\/Mvc\/Collection\/Behavior\/SoftDelete.zep",
                                "line": 69,
                                "char": 50
                            },
                            "file": "\/app\/phalcon\/Mvc\/Collection\/Behavior\/SoftDelete.zep",
                            "line": 74,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "not",
                                "left": {
                                    "type": "mcall",
                                    "variable": {
                                        "type": "variable",
                                        "value": "updateModel",
                                        "file": "\/app\/phalcon\/Mvc\/Collection\/Behavior\/SoftDelete.zep",
                                        "line": 74,
                                        "char": 25
                                    },
                                    "name": "save",
                                    "call-type": 1,
                                    "file": "\/app\/phalcon\/Mvc\/Collection\/Behavior\/SoftDelete.zep",
                                    "line": 74,
                                    "char": 33
                                },
                                "file": "\/app\/phalcon\/Mvc\/Collection\/Behavior\/SoftDelete.zep",
                                "line": 74,
                                "char": 33
                            },
                            "statements": [
                                {
                                    "type": "for",
                                    "expr": {
                                        "type": "mcall",
                                        "variable": {
                                            "type": "variable",
                                            "value": "updateModel",
                                            "file": "\/app\/phalcon\/Mvc\/Collection\/Behavior\/SoftDelete.zep",
                                            "line": 78,
                                            "char": 40
                                        },
                                        "name": "getMessages",
                                        "call-type": 1,
                                        "file": "\/app\/phalcon\/Mvc\/Collection\/Behavior\/SoftDelete.zep",
                                        "line": 78,
                                        "char": 55
                                    },
                                    "value": "message",
                                    "reverse": 0,
                                    "statements": [
                                        {
                                            "type": "mcall",
                                            "expr": {
                                                "type": "mcall",
                                                "variable": {
                                                    "type": "variable",
                                                    "value": "model",
                                                    "file": "\/app\/phalcon\/Mvc\/Collection\/Behavior\/SoftDelete.zep",
                                                    "line": 79,
                                                    "char": 23
                                                },
                                                "name": "appendMessage",
                                                "call-type": 1,
                                                "parameters": [
                                                    {
                                                        "parameter": {
                                                            "type": "variable",
                                                            "value": "message",
                                                            "file": "\/app\/phalcon\/Mvc\/Collection\/Behavior\/SoftDelete.zep",
                                                            "line": 79,
                                                            "char": 45
                                                        },
                                                        "file": "\/app\/phalcon\/Mvc\/Collection\/Behavior\/SoftDelete.zep",
                                                        "line": 79,
                                                        "char": 45
                                                    }
                                                ],
                                                "file": "\/app\/phalcon\/Mvc\/Collection\/Behavior\/SoftDelete.zep",
                                                "line": 79,
                                                "char": 46
                                            },
                                            "file": "\/app\/phalcon\/Mvc\/Collection\/Behavior\/SoftDelete.zep",
                                            "line": 80,
                                            "char": 13
                                        }
                                    ],
                                    "file": "\/app\/phalcon\/Mvc\/Collection\/Behavior\/SoftDelete.zep",
                                    "line": 82,
                                    "char": 18
                                },
                                {
                                    "type": "return",
                                    "expr": {
                                        "type": "bool",
                                        "value": "false",
                                        "file": "\/app\/phalcon\/Mvc\/Collection\/Behavior\/SoftDelete.zep",
                                        "line": 82,
                                        "char": 25
                                    },
                                    "file": "\/app\/phalcon\/Mvc\/Collection\/Behavior\/SoftDelete.zep",
                                    "line": 83,
                                    "char": 9
                                }
                            ],
                            "file": "\/app\/phalcon\/Mvc\/Collection\/Behavior\/SoftDelete.zep",
                            "line": 88,
                            "char": 13
                        },
                        {
                            "type": "mcall",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "variable",
                                    "value": "model",
                                    "file": "\/app\/phalcon\/Mvc\/Collection\/Behavior\/SoftDelete.zep",
                                    "line": 88,
                                    "char": 15
                                },
                                "name": "writeAttribute",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "field",
                                            "file": "\/app\/phalcon\/Mvc\/Collection\/Behavior\/SoftDelete.zep",
                                            "line": 88,
                                            "char": 36
                                        },
                                        "file": "\/app\/phalcon\/Mvc\/Collection\/Behavior\/SoftDelete.zep",
                                        "line": 88,
                                        "char": 36
                                    },
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "value",
                                            "file": "\/app\/phalcon\/Mvc\/Collection\/Behavior\/SoftDelete.zep",
                                            "line": 88,
                                            "char": 43
                                        },
                                        "file": "\/app\/phalcon\/Mvc\/Collection\/Behavior\/SoftDelete.zep",
                                        "line": 88,
                                        "char": 43
                                    }
                                ],
                                "file": "\/app\/phalcon\/Mvc\/Collection\/Behavior\/SoftDelete.zep",
                                "line": 88,
                                "char": 44
                            },
                            "file": "\/app\/phalcon\/Mvc\/Collection\/Behavior\/SoftDelete.zep",
                            "line": 89,
                            "char": 5
                        }
                    ],
                    "docblock": "**\n     * Listens for notifications from the models manager\n     *",
                    "file": "\/app\/phalcon\/Mvc\/Collection\/Behavior\/SoftDelete.zep",
                    "line": 28,
                    "last-line": 90,
                    "char": 19
                }
            ],
            "file": "\/app\/phalcon\/Mvc\/Collection\/Behavior\/SoftDelete.zep",
            "line": 23,
            "char": 5
        },
        "file": "\/app\/phalcon\/Mvc\/Collection\/Behavior\/SoftDelete.zep",
        "line": 23,
        "char": 5
    }
]