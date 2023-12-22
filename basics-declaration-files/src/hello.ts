
jQuery('#QQBoxy');
jQuery.ajax(
    'https://qqboxy.com',
    {
        method: 'POST',
        data: {
            name: 'QQBoxy'
        }
    }
);

interface String {
    prependHello(): string;
}

'QQBoxy'.prependHello();

