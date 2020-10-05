const Telegraf = require("telegraf"),
    axios = require("axios");

const bot = new Telegraf('1003976296:AAEX6t9D9Dv_yzbFFK9JG6AeBe9chWY21Xk');

bot.start((ctx) => {
    ctx.reply("Hey there!! Welcome ! Please use /help command to check the features provided!!");
});

bot.help((ctx) => {
    ctx.reply("This bot can perform the following commands\n 1. /start - To start the bot \n 2. /covid - To get updates numbers of COVID19 cases in India \n 3. /courses - To provide FREE COURSES from various platforms \n4. /help  - To find the features and list of commands provided ")
})

bot.command('courses', (ctx) => {
    ctx.telegram.sendMessage(ctx.chat.id, `We provide you <strong>FREE COURSES</strong> in this epidemic. 

Join the respective channels now: 

<strong>1. Udemy Courses Free</strong> : https://t.me/udemycoursesfree
<strong>2. Eduonix Courses Free</strong> : https://t.me/joinchat/AAAAAFlL_8H87EQ1e8uZww
<strong>3. Udacity Courses Free</strong> : https://t.me/joinchat/AAAAAEdaMVlJhKwCPlqVrw
<strong>4. Coursera Courses Free</strong> : https://t.me/courseracoursesfree`, {
        parse_mode: "HTML"
    });
});

bot.command('covid', (ctx) => {
    // ctx.reply("COVID stats incoming!!!");
    ctx.telegram.sendMessage(ctx.chat.id, '<strong>COVID</strong> stats incoming!!!',
        {
            parse_mode: "HTML",
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "Andaman and Nicobar Islands", callback_data: "AN" },
                        { text: "Andhra Pradesh", callback_data: "AP" }
                    ],
                    [
                        { text: "Arunachal Pradesh", callback_data: "AR" },
                        { text: "Assam", callback_data: "AS" }

                    ],
                    [
                        { text: "Bihar", callback_data: "BR" },
                        { text: "Chandigarh", callback_data: "CH" }
                    ],
                    [
                        { text: "Chhatisgarh", callback_data: "CT" },
                        { text: "Delhi", callback_data: "DL" }
                    ],


                    [
                        { text: "Dadra and Nagar Haweli", callback_data: "DN" },
                        { text: "Goa", callback_data: "GA" }
                    ],
                    [
                        { text: "Gujarat", callback_data: "GJ" },
                        { text: "Haryana", callback_data: "HR" }
                    ],
                    [
                        { text: "Himachal Pradesh", callback_data: "HP" },
                        { text: "Jammu and Kashmir", callback_data: "JK" }

                    ],
                    [
                        { text: "Jharkhand", callback_data: "JH" },
                        { text: "Karnataka", callback_data: "KA" }

                    ],
                    [
                        { text: "Kerala", callback_data: "KL" },
                        { text: "Ladakh", callback_data: "LA" }

                    ],
                    [
                        { text: "Madhya Pradesh", callback_data: "MP" },
                        { text: "Maharashtra", callback_data: "MH" }

                    ],
                    [
                        { text: "Manipur", callback_data: "MN" },
                        { text: "Meghalaya", callback_data: "ML" }


                    ],
                    [
                        { text: "Mizoram", callback_data: "MZ" },
                        { text: "Nagaland", callback_data: "NL" }

                    ],
                    [
                        { text: "Odisha", callback_data: "OR" },
                        { text: "Puducherry", callback_data: "PY" }

                    ],

                    [
                        { text: "Punjab", callback_data: "PB" },
                        { text: "Rajasthan", callback_data: "RJ" }

                    ],
                    [
                        { text: "Sikkim", callback_data: "SK" },
                        { text: "Tamil Nadu", callback_data: "TN" }

                    ],
                    [
                        { text: "Telangana", callback_data: "TS" },
                        { text: "Tripura", callback_data: "TR" }
                    ],
                    [
                        { text: "Uttar Pradesh", callback_data: "UP" },
                        { text: "Uttarakhand", callback_data: "UK" },
                        { text: "West Bengal", callback_data: "WB" }
                    ]
                ]
            }
        })
})

bot.action('AN', (ctx) => {
    ctx.deleteMessage();
    statecode = ctx.match;

    getdata(statecode).then((result) => {
        ctx.telegram.sendMessage(ctx.chat.id, result,
            {
                reply_markup: {
                    inline_keyboard: [
                        [
                            { text: "Go back to menu", callback_data: "go-back" }
                        ]
                    ]
                }
            })
    })
})


bot.action('AP', (ctx) => {
    ctx.deleteMessage();
    statecode = ctx.match;

    getdata(statecode).then((result) => {
        ctx.telegram.sendMessage(ctx.chat.id, result,
            {
                reply_markup: {
                    inline_keyboard: [
                        [
                            { text: "Go back to menu", callback_data: "go-back" }
                        ]
                    ]
                }
            })
    })
})

bot.action('AR', (ctx) => {
    ctx.deleteMessage();
    statecode = ctx.match;

    getdata(statecode).then((result) => {
        ctx.telegram.sendMessage(ctx.chat.id, result,
            {
                reply_markup: {
                    inline_keyboard: [
                        [
                            { text: "Go back to menu", callback_data: "go-back" }
                        ]
                    ]
                }
            })
    })
})

bot.action('AS', (ctx) => {
    ctx.deleteMessage();
    statecode = ctx.match;

    getdata(statecode).then((result) => {
        ctx.telegram.sendMessage(ctx.chat.id, result,
            {
                reply_markup: {
                    inline_keyboard: [
                        [
                            { text: "Go back to menu", callback_data: "go-back" }
                        ]
                    ]
                }
            })
    })
})
bot.action('BR', (ctx) => {
    ctx.deleteMessage();
    statecode = ctx.match;

    getdata(statecode).then((result) => {
        ctx.telegram.sendMessage(ctx.chat.id, result,
            {
                reply_markup: {
                    inline_keyboard: [
                        [
                            { text: "Go back to menu", callback_data: "go-back" }
                        ]
                    ]
                }
            })
    })
})

bot.action('CH', (ctx) => {
    ctx.deleteMessage();
    statecode = ctx.match;

    getdata(statecode).then((result) => {
        ctx.telegram.sendMessage(ctx.chat.id, result,
            {
                reply_markup: {
                    inline_keyboard: [
                        [
                            { text: "Go back to menu", callback_data: "go-back" }
                        ]
                    ]
                }
            })
    })
})

bot.action('CT', (ctx) => {
    ctx.deleteMessage();
    statecode = ctx.match;

    getdata(statecode).then((result) => {
        ctx.telegram.sendMessage(ctx.chat.id, result,
            {
                reply_markup: {
                    inline_keyboard: [
                        [
                            { text: "Go back to menu", callback_data: "go-back" }
                        ]
                    ]
                }
            })
    })
})

bot.action('DL', (ctx) => {
    ctx.deleteMessage();
    statecode = ctx.match;

    getdata(statecode).then((result) => {
        ctx.telegram.sendMessage(ctx.chat.id, result,
            {
                reply_markup: {
                    inline_keyboard: [
                        [
                            { text: "Go back to menu", callback_data: "go-back" }
                        ]
                    ]
                }
            })
    })
})

bot.action('DN', (ctx) => {
    ctx.deleteMessage();
    statecode = ctx.match;

    getdata(statecode).then((result) => {
        ctx.telegram.sendMessage(ctx.chat.id, result,
            {
                reply_markup: {
                    inline_keyboard: [
                        [
                            { text: "Go back to menu", callback_data: "go-back" }
                        ]
                    ]
                }
            })
    })
})

bot.action('GA', (ctx) => {
    ctx.deleteMessage();
    statecode = ctx.match;

    getdata(statecode).then((result) => {
        ctx.telegram.sendMessage(ctx.chat.id, result,
            {
                reply_markup: {
                    inline_keyboard: [
                        [
                            { text: "Go back to menu", callback_data: "go-back" }
                        ]
                    ]
                }
            })
    })
})

bot.action('GJ', (ctx) => {
    ctx.deleteMessage();
    statecode = ctx.match;

    getdata(statecode).then((result) => {
        ctx.telegram.sendMessage(ctx.chat.id, result,
            {
                reply_markup: {
                    inline_keyboard: [
                        [
                            { text: "Go back to menu", callback_data: "go-back" }
                        ]
                    ]
                }
            })
    })
})

bot.action('HR', (ctx) => {
    ctx.deleteMessage();
    statecode = ctx.match;

    getdata(statecode).then((result) => {
        ctx.telegram.sendMessage(ctx.chat.id, result,
            {
                reply_markup: {
                    inline_keyboard: [
                        [
                            { text: "Go back to menu", callback_data: "go-back" }
                        ]
                    ]
                }
            })
    })
})

bot.action('HP', (ctx) => {
    ctx.deleteMessage();
    statecode = ctx.match;

    getdata(statecode).then((result) => {
        ctx.telegram.sendMessage(ctx.chat.id, result,
            {
                reply_markup: {
                    inline_keyboard: [
                        [
                            { text: "Go back to menu", callback_data: "go-back" }
                        ]
                    ]
                }
            })
    })
})

bot.action('JK', (ctx) => {
    ctx.deleteMessage();
    statecode = ctx.match;

    getdata(statecode).then((result) => {
        ctx.telegram.sendMessage(ctx.chat.id, result,
            {
                reply_markup: {
                    inline_keyboard: [
                        [
                            { text: "Go back to menu", callback_data: "go-back" }
                        ]
                    ]
                }
            })
    })
})

bot.action('JH', (ctx) => {
    ctx.deleteMessage();
    statecode = ctx.match;

    getdata(statecode).then((result) => {
        ctx.telegram.sendMessage(ctx.chat.id, result,
            {
                reply_markup: {
                    inline_keyboard: [
                        [
                            { text: "Go back to menu", callback_data: "go-back" }
                        ]
                    ]
                }
            })
    })
})

bot.action('KA', (ctx) => {
    ctx.deleteMessage();
    statecode = ctx.match;

    getdata(statecode).then((result) => {
        ctx.telegram.sendMessage(ctx.chat.id, result,
            {
                reply_markup: {
                    inline_keyboard: [
                        [
                            { text: "Go back to menu", callback_data: "go-back" }
                        ]
                    ]
                }
            })
    })
})

bot.action('KL', (ctx) => {
    ctx.deleteMessage();
    statecode = ctx.match;

    getdata(statecode).then((result) => {
        ctx.telegram.sendMessage(ctx.chat.id, result,
            {
                reply_markup: {
                    inline_keyboard: [
                        [
                            { text: "Go back to menu", callback_data: "go-back" }
                        ]
                    ]
                }
            })
    })
})
bot.action('LA', (ctx) => {
    ctx.deleteMessage();
    statecode = ctx.match;

    getdata(statecode).then((result) => {
        ctx.telegram.sendMessage(ctx.chat.id, result,
            {
                reply_markup: {
                    inline_keyboard: [
                        [
                            { text: "Go back to menu", callback_data: "go-back" }
                        ]
                    ]
                }
            })
    })
})

bot.action('MP', (ctx) => {
    ctx.deleteMessage();
    statecode = ctx.match;

    getdata(statecode).then((result) => {
        ctx.telegram.sendMessage(ctx.chat.id, result,
            {
                reply_markup: {
                    inline_keyboard: [
                        [
                            { text: "Go back to menu", callback_data: "go-back" }
                        ]
                    ]
                }
            })
    })
})

bot.action('MH', (ctx) => {
    ctx.deleteMessage();
    statecode = ctx.match;

    getdata(statecode).then((result) => {
        ctx.telegram.sendMessage(ctx.chat.id, result,
            {
                reply_markup: {
                    inline_keyboard: [
                        [
                            { text: "Go back to menu", callback_data: "go-back" }
                        ]
                    ]
                }
            })
    })
})

bot.action('MN', (ctx) => {
    ctx.deleteMessage();
    statecode = ctx.match;

    getdata(statecode).then((result) => {
        ctx.telegram.sendMessage(ctx.chat.id, result,
            {
                reply_markup: {
                    inline_keyboard: [
                        [
                            { text: "Go back to menu", callback_data: "go-back" }
                        ]
                    ]
                }
            })
    })
})

bot.action('ML', (ctx) => {
    ctx.deleteMessage();
    statecode = ctx.match;

    getdata(statecode).then((result) => {
        ctx.telegram.sendMessage(ctx.chat.id, result,
            {
                reply_markup: {
                    inline_keyboard: [
                        [
                            { text: "Go back to menu", callback_data: "go-back" }
                        ]
                    ]
                }
            })
    })
})

bot.action('MZ', (ctx) => {
    ctx.deleteMessage();
    statecode = ctx.match;

    getdata(statecode).then((result) => {
        ctx.telegram.sendMessage(ctx.chat.id, result,
            {
                reply_markup: {
                    inline_keyboard: [
                        [
                            { text: "Go back to menu", callback_data: "go-back" }
                        ]
                    ]
                }
            })
    })
})

bot.action('NL', (ctx) => {
    ctx.deleteMessage();
    statecode = ctx.match;

    getdata(statecode).then((result) => {
        ctx.telegram.sendMessage(ctx.chat.id, result,
            {
                reply_markup: {
                    inline_keyboard: [
                        [
                            { text: "Go back to menu", callback_data: "go-back" }
                        ]
                    ]
                }
            })
    })
})

bot.action('OR', (ctx) => {
    ctx.deleteMessage();
    statecode = ctx.match;

    getdata(statecode).then((result) => {
        ctx.telegram.sendMessage(ctx.chat.id, result,
            {
                reply_markup: {
                    inline_keyboard: [
                        [
                            { text: "Go back to menu", callback_data: "go-back" }
                        ]
                    ]
                }
            })
    })
})

bot.action('PY', (ctx) => {
    ctx.deleteMessage();
    statecode = ctx.match;

    getdata(statecode).then((result) => {
        ctx.telegram.sendMessage(ctx.chat.id, result,
            {
                reply_markup: {
                    inline_keyboard: [
                        [
                            { text: "Go back to menu", callback_data: "go-back" }
                        ]
                    ]
                }
            })
    })
})

bot.action('PB', (ctx) => {
    ctx.deleteMessage();
    statecode = ctx.match;

    getdata(statecode).then((result) => {
        ctx.telegram.sendMessage(ctx.chat.id, result,
            {
                reply_markup: {
                    inline_keyboard: [
                        [
                            { text: "Go back to menu", callback_data: "go-back" }
                        ]
                    ]
                }
            })
    })
})

bot.action('RJ', (ctx) => {
    ctx.deleteMessage();
    statecode = ctx.match;

    getdata(statecode).then((result) => {
        ctx.telegram.sendMessage(ctx.chat.id, result,
            {
                reply_markup: {
                    inline_keyboard: [
                        [
                            { text: "Go back to menu", callback_data: "go-back" }
                        ]
                    ]
                }
            })
    })
})

bot.action('SK', (ctx) => {
    ctx.deleteMessage();
    statecode = ctx.match;

    getdata(statecode).then((result) => {
        ctx.telegram.sendMessage(ctx.chat.id, result,
            {
                reply_markup: {
                    inline_keyboard: [
                        [
                            { text: "Go back to menu", callback_data: "go-back" }
                        ]
                    ]
                }
            })
    })
})

bot.action('TN', (ctx) => {
    ctx.deleteMessage();
    statecode = ctx.match;

    getdata(statecode).then((result) => {
        ctx.telegram.sendMessage(ctx.chat.id, result,
            {
                reply_markup: {
                    inline_keyboard: [
                        [
                            { text: "Go back to menu", callback_data: "go-back" }
                        ]
                    ]
                }
            })
    })
})

bot.action('TS', (ctx) => {
    ctx.deleteMessage();
    statecode = ctx.match;

    getdata(statecode).then((result) => {
        ctx.telegram.sendMessage(ctx.chat.id, result,
            {
                reply_markup: {
                    inline_keyboard: [
                        [
                            { text: "Go back to menu", callback_data: "go-back" }
                        ]
                    ]
                }
            })
    })
})

bot.action('TR', (ctx) => {
    ctx.deleteMessage();
    statecode = ctx.match;

    getdata(statecode).then((result) => {
        ctx.telegram.sendMessage(ctx.chat.id, result,
            {
                reply_markup: {
                    inline_keyboard: [
                        [
                            { text: "Go back to menu", callback_data: "go-back" }
                        ]
                    ]
                }
            })
    })
})

bot.action('UP', (ctx) => {
    ctx.deleteMessage();
    statecode = ctx.match;

    getdata(statecode).then((result) => {
        ctx.telegram.sendMessage(ctx.chat.id, result,
            {
                reply_markup: {
                    inline_keyboard: [
                        [
                            { text: "Go back to menu", callback_data: "go-back" }
                        ]
                    ]
                }
            })
    })
})

bot.action('UK', (ctx) => {
    ctx.deleteMessage();
    statecode = ctx.match;

    getdata(statecode).then((result) => {
        ctx.telegram.sendMessage(ctx.chat.id, result,
            {
                reply_markup: {
                    inline_keyboard: [
                        [
                            { text: "Go back to menu", callback_data: "go-back" }
                        ]
                    ]
                }
            })
    })
})

bot.action('WB', (ctx) => {
    ctx.deleteMessage();
    statecode = ctx.match;

    getdata(statecode).then((result) => {
        ctx.telegram.sendMessage(ctx.chat.id, result,
            {
                reply_markup: {
                    inline_keyboard: [
                        [
                            { text: "Go back to menu", callback_data: "go-back" }
                        ]
                    ]
                }
            })
    })
})

bot.action('go-back', (ctx) => {
    ctx.deleteMessage();
    ctx.telegram.sendMessage(ctx.chat.id, '<strong>COVID</strong> stats incoming!!!',
        {
            parse_mode: "HTML",
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "Andaman and Nicobar Islands", callback_data: "AN" },
                        { text: "Andhra Pradesh", callback_data: "AP" }
                    ],
                    [
                        { text: "Arunachal Pradesh", callback_data: "AR" },
                        { text: "Assam", callback_data: "AS" }

                    ],
                    [
                        { text: "Bihar", callback_data: "BR" },
                        { text: "Chandigarh", callback_data: "CH" }
                    ],
                    [
                        { text: "Chhatisgarh", callback_data: "CT" },
                        { text: "Delhi", callback_data: "DL" }
                    ],


                    [
                        { text: "Dadra and Nagar Haweli", callback_data: "DN" },
                        { text: "Goa", callback_data: "GA" }
                    ],
                    [
                        { text: "Gujarat", callback_data: "GJ" },
                        { text: "Haryana", callback_data: "HR" }
                    ],
                    [
                        { text: "Himachal Pradesh", callback_data: "HP" },
                        { text: "Jammu and Kashmir", callback_data: "JK" }

                    ],
                    [
                        { text: "Jharkhand", callback_data: "JH" },
                        { text: "Karnataka", callback_data: "KA" }

                    ],
                    [
                        { text: "Kerala", callback_data: "KL" },
                        { text: "Ladakh", callback_data: "LA" }

                    ],
                    [
                        { text: "Madhya Pradesh", callback_data: "MP" },
                        { text: "Maharashtra", callback_data: "MH" }

                    ],
                    [
                        { text: "Manipur", callback_data: "MN" },
                        { text: "Meghalaya", callback_data: "ML" }


                    ],
                    [
                        { text: "Mizoram", callback_data: "MZ" },
                        { text: "Nagaland", callback_data: "NL" }

                    ],
                    [
                        { text: "Odisha", callback_data: "OR" },
                        { text: "Puducherry", callback_data: "PY" }

                    ],

                    [
                        { text: "Punjab", callback_data: "PB" },
                        { text: "Rajasthan", callback_data: "RJ" }

                    ],
                    [
                        { text: "Sikkim", callback_data: "SK" },
                        { text: "Tamil Nadu", callback_data: "TN" }

                    ],
                    [
                        { text: "Telangana", callback_data: "TS" },
                        { text: "Tripura", callback_data: "TR" }
                    ],
                    [
                        { text: "Uttar Pradesh", callback_data: "UP" },
                        { text: "Uttarakhand", callback_data: "UK" },
                        { text: "West Bengal", callback_data: "WB" }
                    ]
                ]
            }
        })
})

async function getdata(statecode) {
    url = 'https://api.covid19india.org/data.json';
    let res = await axios.get(url)
    stateDataArr = res.data.statewise;
    dataState = stateDataArr.filter((elem) => {
        return elem.statecode == statecode;
    })
    cases = dataState[0];
    // console.log(cases.confirmed);

    results = `CASES IN ${cases.state}:

Confirmed Cases: ${cases.confirmed} 
Active Cases: ${cases.active}
Recovered Cases: ${cases.recovered}
Death Cases: ${cases.deaths}        
`
    console.log(results)
    return results;
}

bot.launch();