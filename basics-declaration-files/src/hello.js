"use strict";
jQuery('#QQBoxy');
jQuery.ajax('https://qqboxy.com', {
    method: 'POST',
    data: {
        name: 'QQBoxy'
    }
});
'QQBoxy'.prependHello();
