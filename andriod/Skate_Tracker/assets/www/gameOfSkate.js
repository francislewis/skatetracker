/*
 * JS for gameOfSkate generated by Appery.io
 */

Apperyio.getProjectGUID = function() {
    return '0f717aab-f351-4aa4-aaec-666dbb5f0d0a';
};

function navigateTo(outcome, useAjax) {
    Apperyio.navigateTo(outcome, useAjax);
}

function adjustContentHeight() {
    Apperyio.adjustContentHeightWithPadding();
}

function adjustContentHeightWithPadding(_page) {
    Apperyio.adjustContentHeightWithPadding(_page);
}

function setDetailContent(pageUrl) {
    Apperyio.setDetailContent(pageUrl);
}

Apperyio.AppPages = [{
    "name": "startScreen",
    "location": "startScreen.html"
}, {
    "name": "gameOfSkate",
    "location": "gameOfSkate.html"
}, {
    "name": "trickTracker",
    "location": "trickTracker.html"
}];

function gameOfSkate_js() {

    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobilelabel_1': 'gameOfSkate_mobilelabel_1',
        'mobiletextinput_34': 'gameOfSkate_mobiletextinput_34',
        'mobilegroupedbuttons_13': 'gameOfSkate_mobilegroupedbuttons_13',
        'mobilebutton_s1': 'gameOfSkate_mobilebutton_s1',
        'mobilebutton_k1': 'gameOfSkate_mobilebutton_k1',
        'mobilebutton_a1': 'gameOfSkate_mobilebutton_a1',
        'mobilebutton_t1': 'gameOfSkate_mobilebutton_t1',
        'mobilebutton_e1': 'gameOfSkate_mobilebutton_e1',
        'mobilelabel_2': 'gameOfSkate_mobilelabel_2',
        'mobiletextinput_35': 'gameOfSkate_mobiletextinput_35',
        'mobilegroupedbuttons_20': 'gameOfSkate_mobilegroupedbuttons_20',
        'mobilebutton_s2': 'gameOfSkate_mobilebutton_s2',
        'mobilebutton_k2': 'gameOfSkate_mobilebutton_k2',
        'mobilebutton_a2': 'gameOfSkate_mobilebutton_a2',
        'mobilebutton_t2': 'gameOfSkate_mobilebutton_t2',
        'mobilebutton_e2': 'gameOfSkate_mobilebutton_e2',
        'mobilebutton_8': 'gameOfSkate_mobilebutton_8',
        'mobilebutton_6': 'gameOfSkate_mobilebutton_6',
        'mobilebutton_32': 'gameOfSkate_mobilebutton_32'
    };

    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }

    /*
     * Nonvisual components
     */

    Apperyio.mappings = Apperyio.mappings || {};

    Apperyio.datasources = Apperyio.datasources || {};

    Apperyio.CurrentScreen = 'gameOfSkate';
    _.chain(Apperyio.mappings).filter(function(m) {
        return m.homeScreen === Apperyio.CurrentScreen;
    }).each(Apperyio.UIHandler.hideTemplateComponents);

    /*
     * Events and handlers
     */

    // On Load
    var gameOfSkate_onLoad = function() {
            gameOfSkate_elementsExtraJS();

            gameOfSkate_deviceEvents();
            gameOfSkate_windowEvents();
            gameOfSkate_elementsEvents();
        };

    // screen window events


    function gameOfSkate_windowEvents() {

        $('#gameOfSkate').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });

    };

    // device events


    function gameOfSkate_deviceEvents() {
        document.addEventListener("deviceready", function() {

        });
    };

    // screen elements extra js


    function gameOfSkate_elementsExtraJS() {
        // screen (gameOfSkate) extra code

        /* mobilepopup_1 */
        $("#gameOfSkate_mobilepopup_1").popup("option", "positionTo", "window");

    };

    // screen elements handler


    function gameOfSkate_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });

        $(document).off("click", '#gameOfSkate_mobilecontainer [name="mobilebutton_s1"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    toggle('gameOfSkate_mobilebutton_s1', 'mob', 'false');

                }
            },
        }, '#gameOfSkate_mobilecontainer [name="mobilebutton_s1"]');
        $(document).off("click", '#gameOfSkate_mobilecontainer [name="mobilebutton_k1"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    toggle('gameOfSkate_mobilebutton_k1', 'mob', 'false');

                }
            },
        }, '#gameOfSkate_mobilecontainer [name="mobilebutton_k1"]');
        $(document).off("click", '#gameOfSkate_mobilecontainer [name="mobilebutton_a1"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    toggle('gameOfSkate_mobilebutton_a1', 'mob', 'false');

                }
            },
        }, '#gameOfSkate_mobilecontainer [name="mobilebutton_a1"]');
        $(document).off("click", '#gameOfSkate_mobilecontainer [name="mobilebutton_t1"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    toggle('gameOfSkate_mobilebutton_t1', 'mob', 'false');

                }
            },
        }, '#gameOfSkate_mobilecontainer [name="mobilebutton_t1"]');
        $(document).off("click", '#gameOfSkate_mobilecontainer [name="mobilebutton_e1"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    var player1Name = document.getElementById("gameOfSkate_mobiletextinput_35").value;
                    alert(player1Name + " wins!");
                    setTimeout(function() {
                        window.location = 'gameOfSkate.html';
                    }, 0);

                }
            },
        }, '#gameOfSkate_mobilecontainer [name="mobilebutton_e1"]');

        $(document).off("click", '#gameOfSkate_mobilecontainer [name="mobilebutton_s2"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    toggle('gameOfSkate_mobilebutton_s2', 'mob', 'false');

                }
            },
        }, '#gameOfSkate_mobilecontainer [name="mobilebutton_s2"]');
        $(document).off("click", '#gameOfSkate_mobilecontainer [name="mobilebutton_k2"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    toggle('gameOfSkate_mobilebutton_k2', 'mob', 'false');

                }
            },
        }, '#gameOfSkate_mobilecontainer [name="mobilebutton_k2"]');
        $(document).off("click", '#gameOfSkate_mobilecontainer [name="mobilebutton_a2"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    toggle('gameOfSkate_mobilebutton_a2', 'mob', 'false');

                }
            },
        }, '#gameOfSkate_mobilecontainer [name="mobilebutton_a2"]');
        $(document).off("click", '#gameOfSkate_mobilecontainer [name="mobilebutton_t2"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    toggle('gameOfSkate_mobilebutton_t2', 'mob', 'false');

                }
            },
        }, '#gameOfSkate_mobilecontainer [name="mobilebutton_t2"]');
        $(document).off("click", '#gameOfSkate_mobilecontainer [name="mobilebutton_e2"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    var player2Name = document.getElementById("gameOfSkate_mobiletextinput_34").value;
                    alert(player2Name + " wins!");
                    setTimeout(function() {
                        window.location = 'gameOfSkate.html';
                    }, 0);

                }
            },
        }, '#gameOfSkate_mobilecontainer [name="mobilebutton_e2"]');

        $(document).off("click", '#gameOfSkate_mobilefooter [name="mobilebutton_8"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('trickTracker', {
                        reverse: false
                    });

                }
            },
        }, '#gameOfSkate_mobilefooter [name="mobilebutton_8"]');
        $(document).off("click", '#gameOfSkate_mobilefooter [name="mobilebutton_6"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('startScreen', {
                        reverse: false
                    });

                }
            },
        }, '#gameOfSkate_mobilefooter [name="mobilebutton_6"]');
        $(document).off("click", '#gameOfSkate_mobilefooter [name="mobilebutton_32"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    setTimeout(function() {
                        window.location = 'gameOfSkate.html';
                    }, 0);

                }
            },
        }, '#gameOfSkate_mobilefooter [name="mobilebutton_32"]');

    };

    $(document).off("pagebeforeshow", "#gameOfSkate").on("pagebeforeshow", "#gameOfSkate", function(event, ui) {
        Apperyio.CurrentScreen = "gameOfSkate";
        _.chain(Apperyio.mappings).filter(function(m) {
            return m.homeScreen === Apperyio.CurrentScreen;
        }).each(Apperyio.UIHandler.hideTemplateComponents);
    });

    gameOfSkate_onLoad();
};

$(document).off("pagecreate", "#gameOfSkate").on("pagecreate", "#gameOfSkate", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    gameOfSkate_js();
});