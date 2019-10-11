/**
 * 功能描述：文本输入框文字输入效果
 * 调用示例：
 * var input=document.getElementById('search_input'),
            showText=document.getElementById('showText'),
            Text = new o({
                el:input,
                sentences:["\u65e0\u9521\u9ad8\u67b6\u6865\u57ae\u584c","\u56fd\u8db3\u72c2\u80dc\u5173\u5c9b","\u8bfa\u8d1d\u5c14\u6587\u5b66\u5956\u63ed\u6653","\u6545\u5bab\u96ea\u7cd5\u8d70\u7ea2","\u82f9\u679c\u4e0b\u67b6\u6e2f\u72ec\u5e94\u7528","\u9a6c\u4e91\u5bb6\u65cf\u8749\u8054\u9996\u5bcc"],
                options:{
                    autoStart:!0,
                    onBlurAction:!0,
                    loop:!0
                }
            });
        //Text.start();
        
        Text.autoComplete(showText);自动补全
 * <input id="search_input" placeholder="" class="input" type="text" maxlength="255" value="">
    <p id="showText"></p>

 */
!function() {
    var t = "placeholder"in document.createElement("input");
    var n = Object.freeze({
        START: "start",
        STOP: "stop",
        NOTHING: !1
    })
      , r = {
        letterDelay: 100,
        sentenceDelay: 1e3,
        loop: !1,
        startOnFocus: !0,
        shuffle: !1,
        showCursor: !0,
        cursor: "|",
        autoStart: !1,
        onFocusAction: n.START,
        onBlurAction: n.STOP
    };
    function i(e, t, i) {
        var o, a;
        if (this.el = e,
        this.texts = t,
        i = i || {},
        this.options = function(e, t) {
            var n = {};
            for (var r in e)
                n[r] = void 0 === t[r] ? e[r] : t[r];
            return n
        }(r, i),
        this.options.startOnFocus || (console.warn("Superplaceholder.js: `startOnFocus` option has been deprecated. Please use `onFocusAction`, `onBlurAction` and `autoStart`"),
        this.options.autoStart = !0,
        this.options.onFocusAction = n.NOTHING,
        this.options.onBlurAction = n.NOTHING),
        this.timeouts = [],
        this.isPlaying = !1,
        this.options.shuffle)
            for (var u = this.texts.length; u--; )
                a = ~~(Math.random() * u),
                o = this.texts[a],
                this.texts[a] = this.texts[u],
                this.texts[u] = o;
        this.begin()
    }
    i.prototype.begin = function() {
        this.originalPlaceholder = this.el.getAttribute("placeholder"),
        (this.options.onFocusAction || this.options.onBlurAction) && (this.listeners = {
            focus: this.onFocus.bind(this),
            blur: this.onBlur.bind(this)
        },
        this.el.addEventListener("focus", this.listeners.focus),
        this.el.addEventListener("blur", this.listeners.blur)),
        this.options.autoStart && this.processText(0)
    }
    ,
    i.prototype.onFocus = function() {
        if (this.options.onFocusAction === n.START) {
            if (this.isInProgress())
                return;
            this.processText(0)
        } else
            this.options.onFocusAction === n.STOP && this.cleanUp()
    }
    ,
    i.prototype.onBlur = function() {
        if (this.options.onBlurAction === n.STOP)
            this.cleanUp();
        else if (this.options.onBlurAction === n.START) {
            if (this.isInProgress())
                return;
            this.processText(0)
        }
    }
    ,
    i.prototype.cleanUp = function() {
        for (var e = this.timeouts.length; e--; )
            clearTimeout(this.timeouts[e]);
        null === this.originalPlaceholder ? this.el.removeAttribute("placeholder") : this.el.setAttribute("placeholder", this.originalPlaceholder),
        this.timeouts.length = 0,
        this.isPlaying = !1
    }
    ,
    i.prototype.isInProgress = function() {
        return this.isPlaying
    }
    ,
    i.prototype.typeString = function(e, t) {
        var n, r = this;
        if (!e)
            return !1;
        function i(n) {
            r.el.setAttribute("placeholder", e.substr(0, n + 1) + (n !== e.length - 1 && r.options.showCursor ? r.options.cursor : "")),
            n === e.length - 1 && t()
        }
        for (var o = 0; o < e.length; o++)
            n = setTimeout(i, o * r.options.letterDelay, o),
            r.timeouts.push(n)
    }
    ,
    i.prototype.processText = function(e) {
        var t, n = this;
        this.isPlaying = !0,
        n.typeString(n.texts[e], function() {
            n.timeouts.length = 0,
            n.options.loop || n.texts[e + 1] || (n.isPlaying = !1),
            t = setTimeout(function() {
                n.processText(n.options.loop ? (e + 1) % n.texts.length : e + 1)
            }, n.options.sentenceDelay),
            n.timeouts.push(t)
        })
    },
    i.prototype.getAutoComplete = function (wrap) {//自动补全，可以加入异步请求来完善关键词
        var self = this,
            text=["against all odds","abcd\u5b57\u6bcd\u6b4c","a4\u7eb8\u5c3a\u5bf8","awm","abc","ag\u8d85\u73a9\u4f1a","apologize","a\u76f4\u64ad","afreecatv","a2\u5976\u7c89"];
        function Highlight(){//匹配高亮
            var txt = this.value,
                vals = text.map(el=>{
                    return "<p>"+el.split(txt).join("<i>"+txt+"</i>")+"</p>";
                }).join('');
                wrap.innerHTML= txt.length>0 ? vals : '';
        }

        self.el.addEventListener('input',Highlight)
    };
    var o = function(e) {
        if (t) {
            var n = new i(e.el,e.sentences,e.options);
            return {
                start: function() {
                    n.isInProgress() || n.processText(0)
                },
                stop: function() {
                    n.cleanUp()
                },
                destroy: function() {
                    for (var e in n.cleanUp(),
                    n.listeners)
                        n.el.removeEventListener(e, n.listeners[e])
                },
                autoComplete:function (w) {
                    n.getAutoComplete(w)
                }
            }
        }
    };
    o.Actions = n;
    window['o'] = o;
    //e.exports = o
}()