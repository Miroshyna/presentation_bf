/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
 <!--[if lt IE 8]><!-->
 <script src="ie7/ie7.js"></script>
 <!--<![endif]-->
 */

(function () {
    function addIcon(el, entity) {
        var html = el.innerHTML;
        el.innerHTML = '<span style="font-family: \'Unkur\'">' + entity + '</span>' + html;
    }

    var icons = {
            'icon-assistance': '&#xe600;',
            'icon-benchmark': '&#xe601;',
            'icon-business': '&#xe602;',
            'icon-code': '&#xe603;',
            'icon-explanation': '&#xe604;',
            'icon-failure': '&#xe605;',
            'icon-handshake': '&#xe606;',
            'icon-plan': '&#xe607;',
            'icon-schedule': '&#xe608;',
            'icon-software': '&#xe609;',
            'icon-timer': '&#xe60a;',
            '0': 0
        },
        els = document.getElementsByTagName('*'),
        i, c, el;
    for (i = 0; ; i += 1) {
        el = els[i];
        if (!el) {
            break;
        }
        c = el.className;
        c = c.match(/icon-[^\s'"]+/);
        if (c && icons[c[0]]) {
            addIcon(el, icons[c[0]]);
        }
    }
}());
