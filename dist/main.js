"use strict";
(self.webpackChunkbattleship = self.webpackChunkbattleship || []).push([
  [179],
  {
    324: (e, t, n) => {
      const s = {
        loadCard: () => {
          document.getElementById("app").appendChild(
            (() => {
              const e = document.createElement("section");
              return (
                (e.className = "start-card"),
                e.appendChild(
                  (() => {
                    const e = document.createElement("h1");
                    return (e.textContent = "BATTLESHIP"), e;
                  })(),
                ),
                e.appendChild(
                  (() => {
                    const e = document.createElement("form");
                    e.className = "name-form";
                    const t = document.createElement("input");
                    (t.type = "text"),
                      (t.id = "name-input"),
                      (t.className = "name-input"),
                      (t.placeholder = "Captains's Name");
                    const n = document.createElement("span");
                    return (
                      (n.className = "input-border"),
                      e.appendChild(t),
                      e.appendChild(n),
                      e
                    );
                  })(),
                ),
                e.appendChild(
                  (() => {
                    const e = document.createElement("button");
                    (e.id = "play-button"), (e.className = "play-button");
                    const t = document.createElement("span");
                    return (
                      (t.className = "text-play-button"),
                      (t.textContent = "ENTER ARENA"),
                      e.appendChild(t),
                      e
                    );
                  })(),
                ),
                e
              );
            })(),
          );
        },
      };
      function a() {
        return (
          (a = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var s in n)
                    Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s]);
                }
                return e;
              }),
          a.apply(this, arguments)
        );
      }
      var i = {
          strings: [
            "These are the default values...",
            "You know what you should do?",
            "Use your own!",
            "Have a great day!",
          ],
          stringsElement: null,
          typeSpeed: 0,
          startDelay: 0,
          backSpeed: 0,
          smartBackspace: !0,
          shuffle: !1,
          backDelay: 700,
          fadeOut: !1,
          fadeOutClass: "typed-fade-out",
          fadeOutDelay: 500,
          loop: !1,
          loopCount: 1 / 0,
          showCursor: !0,
          cursorChar: "|",
          autoInsertCss: !0,
          attr: null,
          bindInputFocusEvents: !1,
          contentType: "html",
          onBegin: function (e) {},
          onComplete: function (e) {},
          preStringTyped: function (e, t) {},
          onStringTyped: function (e, t) {},
          onLastStringBackspaced: function (e) {},
          onTypingPaused: function (e, t) {},
          onTypingResumed: function (e, t) {},
          onReset: function (e) {},
          onStop: function (e, t) {},
          onStart: function (e, t) {},
          onDestroy: function (e) {},
        },
        o = new ((function () {
          function e() {}
          var t = e.prototype;
          return (
            (t.load = function (e, t, n) {
              if (
                ((e.el = "string" == typeof n ? document.querySelector(n) : n),
                (e.options = a({}, i, t)),
                (e.isInput = "input" === e.el.tagName.toLowerCase()),
                (e.attr = e.options.attr),
                (e.bindInputFocusEvents = e.options.bindInputFocusEvents),
                (e.showCursor = !e.isInput && e.options.showCursor),
                (e.cursorChar = e.options.cursorChar),
                (e.cursorBlinking = !0),
                (e.elContent = e.attr
                  ? e.el.getAttribute(e.attr)
                  : e.el.textContent),
                (e.contentType = e.options.contentType),
                (e.typeSpeed = e.options.typeSpeed),
                (e.startDelay = e.options.startDelay),
                (e.backSpeed = e.options.backSpeed),
                (e.smartBackspace = e.options.smartBackspace),
                (e.backDelay = e.options.backDelay),
                (e.fadeOut = e.options.fadeOut),
                (e.fadeOutClass = e.options.fadeOutClass),
                (e.fadeOutDelay = e.options.fadeOutDelay),
                (e.isPaused = !1),
                (e.strings = e.options.strings.map(function (e) {
                  return e.trim();
                })),
                (e.stringsElement =
                  "string" == typeof e.options.stringsElement
                    ? document.querySelector(e.options.stringsElement)
                    : e.options.stringsElement),
                e.stringsElement)
              ) {
                (e.strings = []),
                  (e.stringsElement.style.cssText =
                    "clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;");
                var s = Array.prototype.slice.apply(e.stringsElement.children),
                  o = s.length;
                if (o)
                  for (var r = 0; r < o; r += 1)
                    e.strings.push(s[r].innerHTML.trim());
              }
              for (var c in ((e.strPos = 0),
              (e.currentElContent = this.getCurrentElContent(e)),
              e.currentElContent &&
                e.currentElContent.length > 0 &&
                ((e.strPos = e.currentElContent.length - 1),
                e.strings.unshift(e.currentElContent)),
              (e.sequence = []),
              e.strings))
                e.sequence[c] = c;
              (e.arrayPos = 0),
                (e.stopNum = 0),
                (e.loop = e.options.loop),
                (e.loopCount = e.options.loopCount),
                (e.curLoop = 0),
                (e.shuffle = e.options.shuffle),
                (e.pause = {
                  status: !1,
                  typewrite: !0,
                  curString: "",
                  curStrPos: 0,
                }),
                (e.typingComplete = !1),
                (e.autoInsertCss = e.options.autoInsertCss),
                e.autoInsertCss &&
                  (this.appendCursorAnimationCss(e),
                  this.appendFadeOutAnimationCss(e));
            }),
            (t.getCurrentElContent = function (e) {
              return e.attr
                ? e.el.getAttribute(e.attr)
                : e.isInput
                  ? e.el.value
                  : "html" === e.contentType
                    ? e.el.innerHTML
                    : e.el.textContent;
            }),
            (t.appendCursorAnimationCss = function (e) {
              var t = "data-typed-js-cursor-css";
              if (e.showCursor && !document.querySelector("[" + t + "]")) {
                var n = document.createElement("style");
                n.setAttribute(t, "true"),
                  (n.innerHTML =
                    "\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      "),
                  document.body.appendChild(n);
              }
            }),
            (t.appendFadeOutAnimationCss = function (e) {
              var t = "data-typed-fadeout-js-css";
              if (e.fadeOut && !document.querySelector("[" + t + "]")) {
                var n = document.createElement("style");
                n.setAttribute(t, "true"),
                  (n.innerHTML =
                    "\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      "),
                  document.body.appendChild(n);
              }
            }),
            e
          );
        })())(),
        r = new ((function () {
          function e() {}
          var t = e.prototype;
          return (
            (t.typeHtmlChars = function (e, t, n) {
              if ("html" !== n.contentType) return t;
              var s = e.substring(t).charAt(0);
              if ("<" === s || "&" === s) {
                var a;
                for (
                  a = "<" === s ? ">" : ";";
                  e.substring(t + 1).charAt(0) !== a && !(1 + ++t > e.length);

                );
                t++;
              }
              return t;
            }),
            (t.backSpaceHtmlChars = function (e, t, n) {
              if ("html" !== n.contentType) return t;
              var s = e.substring(t).charAt(0);
              if (">" === s || ";" === s) {
                var a;
                for (
                  a = ">" === s ? "<" : "&";
                  e.substring(t - 1).charAt(0) !== a && !(--t < 0);

                );
                t--;
              }
              return t;
            }),
            e
          );
        })())(),
        c = (function () {
          function e(e, t) {
            o.load(this, t, e), this.begin();
          }
          var t = e.prototype;
          return (
            (t.toggle = function () {
              this.pause.status ? this.start() : this.stop();
            }),
            (t.stop = function () {
              this.typingComplete ||
                this.pause.status ||
                (this.toggleBlinking(!0),
                (this.pause.status = !0),
                this.options.onStop(this.arrayPos, this));
            }),
            (t.start = function () {
              this.typingComplete ||
                (this.pause.status &&
                  ((this.pause.status = !1),
                  this.pause.typewrite
                    ? this.typewrite(this.pause.curString, this.pause.curStrPos)
                    : this.backspace(
                        this.pause.curString,
                        this.pause.curStrPos,
                      ),
                  this.options.onStart(this.arrayPos, this)));
            }),
            (t.destroy = function () {
              this.reset(!1), this.options.onDestroy(this);
            }),
            (t.reset = function (e) {
              void 0 === e && (e = !0),
                clearInterval(this.timeout),
                this.replaceText(""),
                this.cursor &&
                  this.cursor.parentNode &&
                  (this.cursor.parentNode.removeChild(this.cursor),
                  (this.cursor = null)),
                (this.strPos = 0),
                (this.arrayPos = 0),
                (this.curLoop = 0),
                e &&
                  (this.insertCursor(),
                  this.options.onReset(this),
                  this.begin());
            }),
            (t.begin = function () {
              var e = this;
              this.options.onBegin(this),
                (this.typingComplete = !1),
                this.shuffleStringsIfNeeded(this),
                this.insertCursor(),
                this.bindInputFocusEvents && this.bindFocusEvents(),
                (this.timeout = setTimeout(function () {
                  0 === e.strPos
                    ? e.typewrite(e.strings[e.sequence[e.arrayPos]], e.strPos)
                    : e.backspace(e.strings[e.sequence[e.arrayPos]], e.strPos);
                }, this.startDelay));
            }),
            (t.typewrite = function (e, t) {
              var n = this;
              this.fadeOut &&
                this.el.classList.contains(this.fadeOutClass) &&
                (this.el.classList.remove(this.fadeOutClass),
                this.cursor && this.cursor.classList.remove(this.fadeOutClass));
              var s = this.humanizer(this.typeSpeed),
                a = 1;
              !0 !== this.pause.status
                ? (this.timeout = setTimeout(function () {
                    t = r.typeHtmlChars(e, t, n);
                    var s = 0,
                      i = e.substring(t);
                    if ("^" === i.charAt(0) && /^\^\d+/.test(i)) {
                      var o = 1;
                      (o += (i = /\d+/.exec(i)[0]).length),
                        (s = parseInt(i)),
                        (n.temporaryPause = !0),
                        n.options.onTypingPaused(n.arrayPos, n),
                        (e = e.substring(0, t) + e.substring(t + o)),
                        n.toggleBlinking(!0);
                    }
                    if ("`" === i.charAt(0)) {
                      for (
                        ;
                        "`" !== e.substring(t + a).charAt(0) &&
                        (a++, !(t + a > e.length));

                      );
                      var c = e.substring(0, t),
                        l = e.substring(c.length + 1, t + a),
                        u = e.substring(t + a + 1);
                      (e = c + l + u), a--;
                    }
                    n.timeout = setTimeout(function () {
                      n.toggleBlinking(!1),
                        t >= e.length
                          ? n.doneTyping(e, t)
                          : n.keepTyping(e, t, a),
                        n.temporaryPause &&
                          ((n.temporaryPause = !1),
                          n.options.onTypingResumed(n.arrayPos, n));
                    }, s);
                  }, s))
                : this.setPauseStatus(e, t, !0);
            }),
            (t.keepTyping = function (e, t, n) {
              0 === t &&
                (this.toggleBlinking(!1),
                this.options.preStringTyped(this.arrayPos, this));
              var s = e.substring(0, (t += n));
              this.replaceText(s), this.typewrite(e, t);
            }),
            (t.doneTyping = function (e, t) {
              var n = this;
              this.options.onStringTyped(this.arrayPos, this),
                this.toggleBlinking(!0),
                (this.arrayPos === this.strings.length - 1 &&
                  (this.complete(),
                  !1 === this.loop || this.curLoop === this.loopCount)) ||
                  (this.timeout = setTimeout(function () {
                    n.backspace(e, t);
                  }, this.backDelay));
            }),
            (t.backspace = function (e, t) {
              var n = this;
              if (!0 !== this.pause.status) {
                if (this.fadeOut) return this.initFadeOut();
                this.toggleBlinking(!1);
                var s = this.humanizer(this.backSpeed);
                this.timeout = setTimeout(function () {
                  t = r.backSpaceHtmlChars(e, t, n);
                  var s = e.substring(0, t);
                  if ((n.replaceText(s), n.smartBackspace)) {
                    var a = n.strings[n.arrayPos + 1];
                    n.stopNum = a && s === a.substring(0, t) ? t : 0;
                  }
                  t > n.stopNum
                    ? (t--, n.backspace(e, t))
                    : t <= n.stopNum &&
                      (n.arrayPos++,
                      n.arrayPos === n.strings.length
                        ? ((n.arrayPos = 0),
                          n.options.onLastStringBackspaced(),
                          n.shuffleStringsIfNeeded(),
                          n.begin())
                        : n.typewrite(n.strings[n.sequence[n.arrayPos]], t));
                }, s);
              } else this.setPauseStatus(e, t, !1);
            }),
            (t.complete = function () {
              this.options.onComplete(this),
                this.loop ? this.curLoop++ : (this.typingComplete = !0);
            }),
            (t.setPauseStatus = function (e, t, n) {
              (this.pause.typewrite = n),
                (this.pause.curString = e),
                (this.pause.curStrPos = t);
            }),
            (t.toggleBlinking = function (e) {
              this.cursor &&
                (this.pause.status ||
                  (this.cursorBlinking !== e &&
                    ((this.cursorBlinking = e),
                    e
                      ? this.cursor.classList.add("typed-cursor--blink")
                      : this.cursor.classList.remove("typed-cursor--blink"))));
            }),
            (t.humanizer = function (e) {
              return Math.round((Math.random() * e) / 2) + e;
            }),
            (t.shuffleStringsIfNeeded = function () {
              this.shuffle &&
                (this.sequence = this.sequence.sort(function () {
                  return Math.random() - 0.5;
                }));
            }),
            (t.initFadeOut = function () {
              var e = this;
              return (
                (this.el.className += " " + this.fadeOutClass),
                this.cursor &&
                  (this.cursor.className += " " + this.fadeOutClass),
                setTimeout(function () {
                  e.arrayPos++,
                    e.replaceText(""),
                    e.strings.length > e.arrayPos
                      ? e.typewrite(e.strings[e.sequence[e.arrayPos]], 0)
                      : (e.typewrite(e.strings[0], 0), (e.arrayPos = 0));
                }, this.fadeOutDelay)
              );
            }),
            (t.replaceText = function (e) {
              this.attr
                ? this.el.setAttribute(this.attr, e)
                : this.isInput
                  ? (this.el.value = e)
                  : "html" === this.contentType
                    ? (this.el.innerHTML = e)
                    : (this.el.textContent = e);
            }),
            (t.bindFocusEvents = function () {
              var e = this;
              this.isInput &&
                (this.el.addEventListener("focus", function (t) {
                  e.stop();
                }),
                this.el.addEventListener("blur", function (t) {
                  (e.el.value && 0 !== e.el.value.length) || e.start();
                }));
            }),
            (t.insertCursor = function () {
              this.showCursor &&
                (this.cursor ||
                  ((this.cursor = document.createElement("span")),
                  (this.cursor.className = "typed-cursor"),
                  this.cursor.setAttribute("aria-hidden", !0),
                  (this.cursor.innerHTML = this.cursorChar),
                  this.el.parentNode &&
                    this.el.parentNode.insertBefore(
                      this.cursor,
                      this.el.nextSibling,
                    )));
            }),
            e
          );
        })();
      const l = n.p + "img/eve65031c6c44997ac3c8d2.png",
        u = n.p + "img/auto24c69cc7d48981ec4fc6.png",
        d = (() => {
          const e = { friend: l, enemy: u };
          return {
            createMessageSection: (t) => {
              const n = document.createElement("section");
              (n.className = "message"), t.forEach((e) => n.classList.add(e));
              const s = t[1],
                a = document.createElement("img");
              return (
                (a.className = "message-image"),
                (a.src = e[t[1]]),
                n.appendChild(a),
                n.appendChild(
                  ((e) => {
                    const t = document.createElement("div");
                    (t.id = "message-container"),
                      (t.className = "message-container");
                    const n = document.createElement("div");
                    return (
                      (n.id = `message-${e}`),
                      (n.className = `message-${e}`),
                      (n.textContent = ""),
                      t.appendChild(n),
                      t
                    );
                  })(s),
                ),
                n
              );
            },
            addTypeWriterMessage: (e, t) => {
              new c(e, { strings: t, typeSpeed: 10 });
            },
          };
        })(),
        h = (() => {
          const e = {
            welcome: [
              "Welcome aboard Captain!",
              "Plan our formation by selecting the axis and dragging and dropping ships on the map.",
            ],
            battleStartPlayer: [
              "Captain, all systems are online and ready for action. Let's give 'em hell!",
            ],
            battleStartEnemy: [
              "I'll show you no mercy, just like your father showed none to mine.",
            ],
            enemyHit: [
              "They're getting schooner-ed, sir.",
              "This battle is a tidal wave of victory!",
              "The enemy ship is feeling the pressure, sir.",
              "We've got them on the ropes sir, I mean rigging!",
              "That was textbook, Captain. They're going down in no time.",
              "Target hit. Enemy vessel has sustained significant damage.",
              "Captain, we have successfully landed a blow on the enemy vessel.",
              "That hit was right on the money, Captain. We've got them reeling.",
              "BOOM! Enemy ship gets hit hard! That's what I call a depth charge!",
              "Direct hit achieved. Enemy ship's combat effectiveness is significantly reduced.",
            ],
            enemySunk: [
              "Captain, the enemy vessel is going down. That was one hell of a shot.",
              "Sir, that was a hit for the history books. The enemy ship has been sunk.",
              "We've just sunk the enemy ship, Captain. They won't be troubling us anymore.",
              "Captain, we've just delivered a knockout blow. The enemy ship has been sunk.",
              "We've just sent the enemy ship to Davy Jones' locker, Captain. Job well done.",
              "Captain, the enemy ship has been vanquished. They won't be bothering us again.",
              "That hit was a decisive blow, Captain. The enemy ship has met its watery grave.",
              "That was a direct hit, Captain. The enemy ship is now resting on the ocean floor.",
              "The enemy ship has been put out of commission. They won't be troubling us anymore.",
              "We've just given the enemy ship a one-way ticket to the bottom of the ocean, Captain.",
            ],
            playerMiss: [
              "Close, but no cigar.",
              "Our aim needs work, captain.",
              "Negative on that shot, captain.",
              "No hit, captain. Keep fighting.",
              "That was a swing and a miss, sir.",
              "No dice on that one. Keep trying!",
              "The enemy is proving to be elusive, sir.",
              "Looks like we need to adjust our aim, sir.",
              "Looks like we need to recalibrate our aim, sir.",
              "We're not making much headway, captain. What's the plan?",
            ],
            playerHit: [
              "Your time is up!",
              "Hehehe, your luck is running out,",
              "Brace yourself for the real pain!",
              "That was just a taste of what's to come.",
              "You'll be swimming with the fishes soon enough.",
              "My torpedoes have your number, it's over for you!",
              "So predictable, you're not even worth the ammunition",
              "How does it feel to be on the receiving end of my wrath?",
              "Your luck has run out, and there's nowhere left to hide!",
              "Looks like I hit a nerve. How about a little retaliation?",
            ],
            playerSunk: [
              "Looks like you'll be swimming home. Heheh.",
              "You fought like a coward and died like a dog.",
              "Looks like your ship was no match for our firepower.",
              "Another one bites the dust. It's too easy to crush your kind.",
              "Your demise was inevitable. The sea always takes what it wants.",
              "Did you really think you stood a chance against us? How foolish.",
              "It's a shame your ship couldn't withstand the might of our fleet.",
              "The ocean belongs to the strong. Your ship didn't stand a chance.",
              "You made a grave mistake challenging me. Your defeat was certain.",
              "You should have surrendered while you had the chance. Now look at you.",
            ],
            enemyMiss: [
              "I'll get you next time.",
              "My turn to strike again.",
              "Missed, but not for long.",
              "You can run, but you can't hide.",
              "You can't escape my sight forever.",
              "Your luck is just prolonging the inevitable.",
              "My torpedoes will find you, no matter where you hide.",
              "You may have dodged one, but you can't dodge them all.",
              "That was just a warning shot, the real attack is coming.",
              "You're playing with fire, and I have a lot of ammunition.",
            ],
            noComment: ["..."],
          };
          function t() {
            return Math.floor(10 * Math.random());
          }
          return {
            getWelcomeMessage: function () {
              return e.welcome;
            },
            getBattleMessage: function () {
              return e.battleStartPlayer;
            },
            getEnemyBattleMessage: function () {
              return e.battleStartEnemy;
            },
            getEnemyHitMessage: function (n) {
              let s = n;
              for (; s === n; ) s = e.enemyHit[t()];
              return s;
            },
            getEnemySunkMessage: function (n) {
              let s = n;
              for (; s === n; ) s = e.enemySunk[t()];
              return s;
            },
            getPlayerMissMessage: function (n) {
              let s = n;
              for (; s === n; ) s = e.playerMiss[t()];
              return s;
            },
            getNoCommentMessage: function () {
              return e.noComment;
            },
            getEnemyMissMessage: function (n) {
              let s = n;
              for (; s === n; ) s = e.enemyMiss[t()];
              return s;
            },
            getPlayerHitMessage: function (n) {
              let s = n;
              for (; s === n; ) s = e.playerHit[t()];
              return s;
            },
            getPlayerSunkMessage: function (n) {
              let s = n;
              for (; s === n; ) s = e.playerSunk[t()];
              return s;
            },
          };
        })(),
        p = h,
        m = (() => {
          const e = (e) => {
            const t = document.createElement("div");
            (t.id = `field-container-${e}`), (t.className = "field-container");
            for (let e = 0; e < 10; e += 1)
              for (let e = 0; e < 10; e += 1) {
                const e = document.createElement("div");
                (e.className = "field"), t.appendChild(e);
              }
            return t;
          };
          return {
            deleteContent: () => {
              document.getElementById("app").replaceChildren("");
            },
            createMap: (t) => {
              const n = document.createElement("div");
              return (
                (n.id = `board-${t}`),
                n.classList.add("board", t),
                n.appendChild(
                  (() => {
                    const e = document.createElement("div");
                    return (
                      (e.classList = "numberx-container"),
                      (e.id = "numberx-container"),
                      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].forEach((t) => {
                        const n = document.createElement("div");
                        (n.classList = "number"),
                          (n.textContent = t),
                          e.appendChild(n);
                      }),
                      e
                    );
                  })(),
                ),
                n.appendChild(
                  (() => {
                    const e = document.createElement("div");
                    return (
                      (e.classList = "numbery-container"),
                      (e.id = "numbery-container"),
                      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].forEach((t) => {
                        const n = document.createElement("div");
                        (n.classList = "number"),
                          (n.textContent = t),
                          e.appendChild(n);
                      }),
                      e
                    );
                  })(),
                ),
                n.appendChild(e(t)),
                n
              );
            },
            createBoard: e,
            getCoordinates: (e) => [parseInt(e / 10, 10), e % 10],
            getIndex: (e, t) => 10 * e + t,
            nearestTen: (e) => {
              for (; e % 10 != 0; ) e += 1;
              return e;
            },
            randomTen: () => Math.floor(5 * Math.random()) + 1,
            renderBattleMessage: (e) => {
              const t = document.getElementById(`message-${e}`);
              "friend" === e
                ? d.addTypeWriterMessage(t, p.getBattleMessage())
                : d.addTypeWriterMessage(t, p.getEnemyBattleMessage());
            },
          };
        })(),
        g = m,
        y = n.p + "img/BattleshipX90674ad440b4a45324a8.svg",
        f = n.p + "img/CarrierXd9abd65e3052cdfaddc5.svg",
        b = n.p + "img/CruiserX59963e708f4ca8db81ac.svg",
        C = n.p + "img/DestroyerX636a499a990bcbff4109.svg",
        E = n.p + "img/SubmarineXe75582b7a7e2f393394b.svg",
        v = (e, t) => {
          let n = !1,
            s = 0,
            a = !1;
          return {
            length: t,
            hit: () => {
              (s += 1), s === t && (n = !0);
            },
            getName: () => e,
            isSunk: n,
            getSunk: () => n,
            name: e,
            getLength: () => t,
            getHits: () => s,
            found: () => a,
            gotFound: () => {
              a = !0;
            },
            resetFound: () => {
              a = !1;
            },
          };
        },
        k = (e) => {
          const t = (() => {
            const e = new Array(10)
                .fill("x")
                .map(() => new Array(10).fill("x")),
              t = [];
            let n = [],
              s = "X";
            const a = { name: "", length: 0 },
              i = (e) => n.filter((t) => t.getName() === e)[0],
              o = (e) => {
                switch (e.getName()) {
                  case "carrier":
                    n.push(v("carrier", 5));
                    break;
                  case "battleship":
                    n.push(v("battleship", 4));
                    break;
                  case "cruiser":
                    n.push(v("cruiser", 3));
                    break;
                  case "submarine":
                    n.push(v("submarine", 3));
                    break;
                  default:
                    n.push(v("destroyer", 2));
                }
              },
              r = (e, t, n) => e > t - n;
            return {
              board: e,
              placeX: (t, n, s) => {
                let a = t.getLength();
                const i = [];
                if (r(a, e.length, s)) return !1;
                for (let t = s; t < e.length; t++) {
                  if ("x" !== e[n][t]) return !1;
                  if ((i.push([n, t]), (a -= 1), 0 === a)) break;
                }
                return (
                  i.forEach((n) => {
                    const [s, a] = n;
                    e[s][a] = `${t.getName()}X`;
                  }),
                  o(t),
                  !0
                );
              },
              placeY: (t, n, s) => {
                let a = t.getLength();
                const i = [];
                if (r(a, e.length, n)) return !1;
                for (let t = n; t < e.length; t++) {
                  if ("x" !== e[t][s]) return !1;
                  if ((i.push([t, s]), (a -= 1), 0 === a)) break;
                }
                return (
                  i.forEach((n) => {
                    const [s, a] = n;
                    e[s][a] = `${t.getName()}Y`;
                  }),
                  o(t),
                  !0
                );
              },
              receiveAttack: (n, s) => {
                ((n, s) => {
                  switch (e[n][s]) {
                    case "carrierX":
                    case "carrierY":
                      i("carrier").hit(), (e[n][s] = "hit");
                      break;
                    case "battleshipX":
                    case "battleshipY":
                      i("battleship").hit(), (e[n][s] = "hit");
                      break;
                    case "cruiserX":
                    case "cruiserY":
                      i("cruiser").hit(), (e[n][s] = "hit");
                      break;
                    case "submarineX":
                    case "submarineY":
                      i("submarine").hit(), (e[n][s] = "hit");
                      break;
                    case "destroyerX":
                    case "destroyerY":
                      i("destroyer").hit(), (e[n][s] = "hit");
                      break;
                    default:
                      (e[n][s] = "miss"), t.push([n, s]);
                  }
                })(n, s);
              },
              getShip: i,
              missedTarget: t,
              allSunk: () => 5 === n.filter((e) => !0 === e.getSunk()).length,
              getBoard: () => e,
              shipOnDrag: a,
              getshipOnDrag: () => a,
              setShipOnDrag: (e) => {
                (a.name = e.name), (a.length = e.length);
              },
              getFleet: () => n,
              setFleetEmpty: () => {
                n = [];
              },
              axis: s,
              getAxis: () => s,
              setAxisX: () => {
                s = "X";
              },
              setAxisY: () => {
                s = "Y";
              },
              setAllShipsNotFound: () => n.forEach((e) => (e.isFound = !1)),
              areAllShipsFound: () => 5 === n.length,
            };
          })();
          let n = 0,
            s = e;
          const a = () => s,
            i = (e, n) => "miss" !== t.board[e][n] && "hit" !== t.board[e][n],
            o = () => Math.floor(10 * Math.random()),
            r = () => {
              let e,
                s,
                a = !0;
              for (; a; )
                (e = o()),
                  (s = o()),
                  i(e, s) && ((a = !1), t.receiveAttack(e, s), (n += 1));
              return [e, s];
            };
          return {
            play: (e, s) => {
              "cpu" !== a().toLowerCase()
                ? i(e, s) && (t.receiveAttack(e, s), (n += 1))
                : r();
            },
            getTurn: () => n,
            getName: a,
            setName: (e) => {
              s = e;
            },
            board: t,
            getMap: () => t,
            autoPlace: () => {
              const e = [
                  "battleship",
                  "carrier",
                  "cruiser",
                  "destroyer",
                  "submarine",
                ],
                n = [4, 5, 3, 2, 3];
              for (; e.length; ) {
                const s = ["X", "Y"][Math.floor(2 * Math.random())];
                let a = !1;
                const i = o(),
                  r = o();
                (a =
                  "X" === s
                    ? t.placeX(v(e[0], n[0]), i, r)
                    : t.placeY(v(e[0], n[0]), i, r)),
                  a && (e.shift(), n.shift()),
                  console.log(t);
              }
            },
            cpuPlay: r,
          };
        },
        w = (() => {
          const e = () => {
              const e = k("Captain"),
                t = k("cpu");
              return { getCPU: () => t, getPlayer: () => e, player: e, cpu: t };
            },
            t = e(),
            n = () => t;
          return {
            initializeGame: e,
            state: t,
            getState: n,
            setPlayerName: function () {
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "Captain";
              return n().getPlayer().setName(e);
            },
          };
        })(),
        S = (() => {
          let e = null;
          const t = (t, n) => {
            const s = n.boardElement.slice(0, -1);
            console.log(s);
            const a = t.getMap().getShip(s);
            if (a.found()) return;
            a.gotFound();
            const i = a.getLength(),
              [o, r] = ["10%", 10 * i + "%"],
              [c, l] = [10 * n.i + "%", 10 * n.j + "%"];
            let u = "rotate(0deg)";
            "Y" === n.boardElement.at(-1) &&
              (u = "rotate(90deg) translate(0, -100%)");
            const d =
              (null === e && (e = new Date().getTime()),
              (new Date().getTime() - e) / 1e3);
            console.log(d);
            const h = document.createElement("div");
            h.classList.add("ship-image-container"),
              (h.style.position = "absolute"),
              (h.style.zIndex = "-1"),
              (h.style.top = c),
              (h.style.left = l),
              (h.style.width = r),
              (h.style.height = o),
              (h.style.transform = u),
              (h.style.transformOrigin = "top left"),
              (h.style.maskImage = f),
              (h.style.animationDelay = -d + "s");
            const p = document.createElement("img");
            (p.className = !0 === t.isCpu ? `${s}-cpu` : `${s}-player`),
              p.classList.add("placed-ship"),
              (p.src = ((e) => {
                let t;
                switch (e) {
                  case "battleship":
                    t = y;
                    break;
                  case "carrier":
                    t = f;
                    break;
                  case "cruiser":
                    t = b;
                    break;
                  case "destroyer":
                    t = C;
                    break;
                  case "submarine":
                    t = E;
                    break;
                  default:
                    t = "";
                }
                return t;
              })(s)),
              (p.style.height = "95%"),
              (p.style.aspectRatio = `${i}/1`),
              h.appendChild(p),
              n.board.appendChild(h);
          };
          return {
            loadShipsOnBoard: t,
            loadFleet: (e) => {
              const n = w.state.getPlayer(),
                s = n.getMap(),
                a = s.getBoard();
              console.log(a);
              for (let i = 0; i < a.length; i += 1)
                for (let o = 0; o < a[0].length; o += 1)
                  "x" !== a[i][o] &&
                    t(n, { map: s, board: e, boardElement: a[i][o], i, j: o });
            },
          };
        })(),
        M = S,
        N = (() => {
          const e = (e) => {
              const t = document.createElement("div");
              t.className = "map-title-container";
              const n = document.createElement("h3");
              return (
                (n.className = "map-title"),
                (n.textContent = e),
                t.appendChild(n),
                t
              );
            },
            t = (e) => e.slice(0, e.length - 1),
            n = (e, t) => {
              ((e) => {
                e.nextElementSibling &&
                  ((e.textContent = ""), e.nextElementSibling.remove());
              })(e),
                d.addTypeWriterMessage(e, [t]);
            },
            s = (e) => {
              e.classList.add("hit");
            },
            a = (e) => {
              e.classList.add("miss");
            };
          function i() {
            return new Promise((e) => {
              setTimeout(e, 200);
            });
          }
          function o() {
            return new Promise((e) => {
              setTimeout(e, 100);
            });
          }
          async function r(e) {
            const { target: r } = e;
            r.classList.add("disabled"),
              await (async function (e) {
                const r = document.querySelector(".message.battle.enemy"),
                  c = document.querySelector(".message.battle.friend");
                r.classList.remove("on-turn"),
                  c.classList.add("on-turn"),
                  await o();
                const l = w.state.getCPU(),
                  u = [...e.parentNode.children].indexOf(e),
                  [d, h] = g.getCoordinates(u),
                  m = l.getMap().getBoard()[d][h],
                  y = t(m),
                  f = l.getMap().getShip(y);
                "x" === m
                  ? a(e)
                  : (s(e),
                    ((e) => {
                      const t = document.getElementById(
                          "field-container-enemy",
                        ),
                        n = e.cpu.getMap(),
                        s = n.getBoard();
                      if (
                        (n.receiveAttack(e.row, e.col), e.battleship.isSunk)
                      ) {
                        const [a, i] = ((e, t) => {
                          for (let n = 0; n < e.length; n += 1)
                            for (let s = 0; s < e[0].length; s += 1)
                              if (e[n][s] === t) return [n, s];
                          return [0, 0];
                        })(s, s[e.row][e.col]);
                        M.loadShipsOnBoard(e.cpu, {
                          map: n,
                          board: t,
                          boardElement: s[e.row][e.col],
                          i: a,
                          j: i,
                        });
                      }
                    })({ cpu: l, battleship: f, row: d, col: h })),
                  (function (e) {
                    let t =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1];
                    const s = document.getElementById("message-friend"),
                      a = document.getElementById("message-enemy");
                    "x" !== e &&
                      (t && !t.isSunk
                        ? (console.log(t),
                          n(s, p.getEnemyHitMessage(s.textContent)))
                        : t.isSunk
                          ? (console.log(t),
                            n(s, p.getEnemySunkMessage(s.textContent)))
                          : n(s, p.getPlayerMissMessage(s.textContent))),
                      "..." !== a.textContent &&
                        n(a, p.getNoCommentMessage()[0]);
                  })(m, f),
                  await i();
              })(r),
              await (async function () {
                const e = document.querySelector(".message.battle.enemy"),
                  r = document.querySelector(".message.battle.friend");
                r.classList.remove("on-turn"),
                  e.classList.add("on-turn"),
                  await o();
                const c = document.getElementById("field-container-friendly"),
                  l = w.state.getPlayer(),
                  [u, d] = l.cpuPlay(),
                  h = l.getMap().getBoard()[u][d],
                  m = t(h),
                  y = l.getMap().getShip(m),
                  f = g.getIndex(u, d);
                "miss" === h
                  ? (a(c.children[f]), (l.getMap().getBoard()[u][d] = "miss"))
                  : ((l.getMap().getBoard()[u][d] = "hit"), s(c.children[f])),
                  (function (e) {
                    let t =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1];
                    const s = document.getElementById("message-friend"),
                      a = document.getElementById("message-enemy");
                    "x" !== e && "miss" !== e
                      ? t && !t.isSunk
                        ? (console.log(e),
                          n(a, p.getPlayerHitMessage(a.textContent)))
                        : t.isSunk &&
                          (console.log(e),
                          n(a, p.getPlayerSunkMessage(a.textContent)))
                      : (console.log("a"),
                        n(a, p.getEnemyMissMessage(a.textContent))),
                      "..." !== s.textContent &&
                        n(s, p.getNoCommentMessage()[0]);
                  })(h, y),
                  console.log(l.getMap()),
                  await i(),
                  e.classList.remove("on-turn"),
                  r.classList.add("on-turn");
              })();
          }
          return {
            loadBattleSection: () => {
              g.deleteContent();
              const t = document.getElementById("app");
              (t.classList = ""),
                t.classList.add("app", "battle"),
                t.appendChild(
                  (() => {
                    const t = document.createElement("section");
                    return (
                      (t.className = "maps-section"),
                      t.appendChild(
                        (() => {
                          const t = g.createMap("friendly");
                          return t.appendChild(e("FRIENDLY WATERS")), t;
                        })(),
                      ),
                      t.appendChild(
                        (() => {
                          const t = g.createMap("enemy");
                          return t.appendChild(e("ENEMY WATERS")), t;
                        })(),
                      ),
                      t.appendChild(
                        d.createMessageSection(["battle", "friend"]),
                      ),
                      t.appendChild(
                        d.createMessageSection(["battle", "enemy"]),
                      ),
                      t
                    );
                  })(),
                ),
                (() => {
                  const e = document.getElementById("field-container-friendly");
                  w.state.getPlayer().getMap().setAllShipsNotFound(),
                    M.loadFleet(e);
                })(),
                w.state.getCPU().autoPlace(),
                g.renderBattleMessage("friend"),
                g.renderBattleMessage("enemy"),
                document
                  .getElementById("board-enemy")
                  .querySelector(".field-container")
                  .childNodes.forEach((e) => {
                    e.addEventListener("click", r);
                  });
            },
          };
        })(),
        T = N,
        L = (() => {
          const e = (e, t) => {
            const n = w.state.getPlayer().getMap();
            "x-button" === e.id ? n.setAxisX() : n.setAxisY(),
              e.classList.add("selected"),
              t.classList.remove("selected");
          };
          function t() {
            T.loadBattleSection();
          }
          const n = () => {
              const e = document.getElementById("reset-button"),
                n = document.getElementById("continue-button"),
                s = w.state.getPlayer().getMap().getBoard();
              e.addEventListener("click", () =>
                ((e) => {
                  const t = document.getElementById("field-container-setup");
                  (function () {
                    const e = w.state.getPlayer().getMap();
                    !(function () {
                      const e = document.getElementById("fleet-setup"),
                        t = document.getElementById("message-friend");
                      e.childNodes.forEach((e) => {
                        e.classList.contains("hidden") &&
                          (e.classList.remove("hidden"),
                          t.classList.add("reset"));
                      });
                    })(),
                      e.getFleet().forEach((e) => e.resetFound()),
                      e.setFleetEmpty();
                  })(),
                    (function (e) {
                      for (let t = 0; t < e.length; t += 1)
                        for (let n = 0; n < e[0].length; n += 1) e[t][n] = "x";
                    })(e),
                    t
                      .querySelectorAll(".ship-image-container")
                      .forEach((e) => e.remove());
                })(s),
              ),
                n.addEventListener("click", t);
            },
            s = () => {
              const e = document.createElement("div");
              return (
                (e.className = "board-fleet-container"),
                e.appendChild(g.createMap("setup")),
                e.appendChild(
                  (() => {
                    const e = document.createElement("section");
                    return (
                      (e.id = "fleet-setup"),
                      (e.className = "fleet-setup"),
                      [
                        "batttleship",
                        "carrier",
                        "cruiser",
                        "destroyer",
                        "submarine",
                      ].forEach((t) => {
                        const n = ((e) => {
                          const t = document.createElement("button"),
                            n = document.createElement("div"),
                            s = document.createElement("img"),
                            a = document.createElement("p");
                          switch (
                            ((t.className = "ship-card"),
                            (n.className = "ship-content"),
                            (s.className = "ship-image"),
                            (a.className = "ship-name"),
                            e)
                          ) {
                            case "carrier":
                              (t.dataset.shipName = "carrier"),
                                (t.dataset.shipLength = 5),
                                (s.src = f),
                                (a.textContent = "Carrier");
                              break;
                            case "cruiser":
                              (t.dataset.shipName = "cruiser"),
                                (t.dataset.shipLength = 3),
                                (s.src = b),
                                (a.textContent = "Cruiser");
                              break;
                            case "destroyer":
                              (t.dataset.shipName = "destroyer"),
                                (t.dataset.shipLength = 2),
                                (s.src = C),
                                (a.textContent = "Destroyer");
                              break;
                            case "submarine":
                              (t.dataset.shipName = "submarine"),
                                (t.dataset.shipLength = 3),
                                (s.src = E),
                                (a.textContent = "Submarine");
                              break;
                            default:
                              (t.dataset.shipName = "battleship"),
                                (t.dataset.shipLength = 4),
                                (s.src = y),
                                (a.textContent = "Battleship");
                          }
                          return (
                            n.appendChild(s),
                            n.appendChild(a),
                            t.appendChild(n),
                            t
                          );
                        })(t);
                        (n.draggable = "true"), e.appendChild(n);
                      }),
                      e
                    );
                  })(),
                ),
                e.querySelector("#board-setup").appendChild(
                  (() => {
                    const e = document.createElement("div");
                    (e.id = "axis-button-container"),
                      (e.className = "axis-button-container");
                    const t = document.createElement("button");
                    (t.id = "x-button"),
                      t.classList.add("axis-button", "selected"),
                      (t.className = "axis-button"),
                      (t.textContent = "X Axis");
                    const n = document.createElement("button");
                    return (
                      (n.id = "y-button"),
                      (n.className = "axis-button"),
                      (n.textContent = "Y Axis"),
                      e.appendChild(t),
                      e.appendChild(n),
                      e
                    );
                  })(),
                ),
                e
              );
            };
          return {
            loadSetupMaterial: () => {
              const t = document.getElementById("app");
              (t.classList = ""),
                t.classList.add("app", "setup"),
                t.appendChild(d.createMessageSection(["setup", "friend"])),
                t.appendChild(
                  (() => {
                    const e = document.createElement("section");
                    return (
                      (e.id = "setup-container"),
                      (e.className = "setup-container"),
                      e.appendChild(s()),
                      e
                    );
                  })(),
                ),
                t.appendChild(
                  (() => {
                    const e = document.createElement("section");
                    (e.id = "reset-continue-section"),
                      (e.className = "reset-continue-section");
                    const t = document.createElement("button");
                    (t.className = "reset-button"),
                      (t.id = "reset-button"),
                      (t.textContent = "Reset");
                    const n = document.createElement("button");
                    return (
                      (n.className = "continue-button"),
                      (n.id = "continue-button"),
                      (n.textContent = "Continue"),
                      e.appendChild(t),
                      e.appendChild(n),
                      e
                    );
                  })(),
                );
              const a = document.getElementById("message-friend");
              d.addTypeWriterMessage(a, p.getWelcomeMessage()),
                (() => {
                  const t = document.getElementById("x-button"),
                    n = document.getElementById("y-button");
                  t.addEventListener("click", () => e(t, n)),
                    n.addEventListener("click", () => e(n, t));
                })(),
                n();
            },
          };
        })(),
        x = L,
        B = (() => {
          let e = [];
          const t = () => {
              e = [];
            },
            n = () => {
              const n = document.getElementById("field-container-setup");
              for (let t = 0; t < e.length; t += 1)
                n.children[e[t]].className = "field";
              t();
            };
          return {
            draggableFields: () => {
              document.getElementById("fleet-setup").childNodes.forEach((e) => {
                e.addEventListener("dragstart", () => {
                  w.state
                    .getPlayer()
                    .getMap()
                    .setShipOnDrag({
                      name: e.dataset.shipName,
                      length: e.dataset.shipLength,
                    });
                });
              }),
                document
                  .getElementById("field-container-setup")
                  .childNodes.forEach((e) => {
                    e.addEventListener("dragenter", (e) => {
                      e.preventDefault();
                    });
                  }),
                (() => {
                  const n = document.getElementById("field-container-setup");
                  n.childNodes.forEach((s, a) => {
                    s.addEventListener("dragover", (s) => {
                      s.preventDefault(),
                        ((n, s) => {
                          const a = w.state.getPlayer().getMap(),
                            i = a.getBoard(),
                            o = a.getAxis(),
                            r = a.getshipOnDrag();
                          let { length: c } = r;
                          t();
                          let l = !1;
                          if ("X" === o)
                            for (let t = s; t < g.nearestTen(s + 1); t += 1) {
                              const [s, a] = g.getCoordinates(t);
                              if (0 === c) break;
                              n.children[t].classList.add("hovering"),
                                e.push(t),
                                (c -= 1),
                                "x" !== i[s][a] && (l = !0);
                            }
                          if ("Y" === o)
                            for (let t = s; t < 100; t += 10) {
                              const [s, a] = g.getCoordinates(t);
                              if (0 === c) break;
                              n.children[t].classList.add("hovering"),
                                e.push(t),
                                (c -= 1),
                                "x" !== i[s][a] && (l = !0);
                            }
                          (l || 0 !== c) &&
                            e.forEach((e) => {
                              n.children[e].classList.add("red");
                            });
                        })(n, a);
                    });
                  });
                })(),
                document
                  .getElementById("field-container-setup")
                  .childNodes.forEach((e) => {
                    e.addEventListener("dragleave", () => {
                      n();
                    });
                  }),
                (() => {
                  const e = document.getElementById("field-container-setup");
                  e.childNodes.forEach((t, s) => {
                    t.addEventListener("drop", () => {
                      console.log(w.state.getPlayer().getMap().getBoard());
                      const [t, a] = g.getCoordinates(s),
                        [i, o] = ((e, t) => {
                          const n = w.getState().getPlayer().getMap(),
                            s = w
                              .getState()
                              .getPlayer()
                              .getMap()
                              .getshipOnDrag();
                          return "X" === n.getAxis()
                            ? [n.placeX(v(s.name, s.length), e, t), s.name]
                            : [n.placeY(v(s.name, s.length), e, t), s.name];
                        })(t, a);
                      n(),
                        M.loadFleet(e),
                        ((e, t) => {
                          e &&
                            document
                              .querySelector(`[data-ship-name=${t}]`)
                              .classList.add("hidden");
                        })(i, o);
                    });
                  });
                })();
            },
          };
        })(),
        P = B;
      (() => {
        const e = () => {
          g.deleteContent(), x.loadSetupMaterial(), P.draggableFields();
        };
        return {
          loadContent: () => {
            s.loadCard(),
              document
                .getElementById("play-button")
                .addEventListener("click", e);
          },
        };
      })().loadContent();
    },
  },
  (e) => {
    e((e.s = 324));
  },
]);
