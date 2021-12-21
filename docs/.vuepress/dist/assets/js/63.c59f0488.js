(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{456:function(e,n,i){"use strict";i.r(n);var r=i(54),t=Object(r.a)({},(function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h3",{attrs:{id:"_4-7ground-truth-production"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_4-7ground-truth-production"}},[e._v("#")]),e._v(" 4.7\tGround Truth Production")]),e._v(" "),i("p",[i("strong",[e._v("Input")]),e._v(": Zeilenbild und entsprechender OCR-Output, wenn verfügbar"),i("br"),e._v(" "),i("strong",[e._v("Output")]),e._v(": zeilenbasierte Ground Truth")]),e._v(" "),i("ul",[i("li",[e._v("Unter dem Menüpunkt „Ground Truth Production” können die im Teilmodul Recognition erzeugten Texte eingesehen, korrigiert und als Trainingsgrundlage in Form von sog. Ground Truth abgespeichert werden.")]),e._v(" "),i("li",[e._v("Das zugrundeliegende Korrekturtool ist dreispaltig aufgebaut: Auf der linken Seite finden sich, jeweils untereinander, die auswählbaren Seiten. Mittig werden die durch den Workflow erzeugten Zeilenbilder aus den Textseiten (s. o.) sowie die aus ihnen generierten Zeilen OCR-Text angezeigt. Diese standardmäßig dargestellte Anzeige wird als „Text View“ bezeichnet.")])]),e._v(" "),i("p",[i("img",{attrs:{src:"/docs/.vuepress/public/images/Abb36.png",alt:"Abb36.png"}})]),e._v(" "),i("p",[e._v("Abb. 36: Ground Truth Production mit „Text View”.")]),e._v(" "),i("ul",[i("li",[e._v("Über die Option „Switch to Page View” in der Werkzeugleiste besteht die Möglichkeit, von der „Text View“ auf die „Page View“ zu wechseln. In dieser Ansicht können die einzelnen Textzeilen im visuellen Gesamtkontext des Seitenlayouts bearbeitet werden. Nutzen Sie die Option „Switch to Text View“, um wieder auf die „Text View“ umzuschalten.")])]),e._v(" "),i("p",[i("img",{attrs:{src:"/docs/.vuepress/public/images/Abb37.png",alt:"Abb37.png"}})]),e._v(" "),i("p",[e._v("Abb. 37: Ground Truth Production mit „Page View”.")]),e._v(" "),i("ul",[i("li",[e._v("Auf der rechten Seite der Anzeige befindet sich das sog. Virtual Keyboard, in welchem Sonderzeichen (Ligaturen, Abkürzungen, Diakritika etc.) aufgeführt werden. Diese können durch einfaches Anklicken entsprechend der Position des Cursors in die Textzeilen auf der linken Seite eingefügt werden. Um Zeichen zum Keyboard hinzuzufügen, wird einfach das Plus-Icon betätigt und das entsprechende Zeichen mittels Copy und Paste in das sich öffnende Formular eingegeben und durch Betätigung der „Save“-Schaltfläche bestätigt. Sollen Zeichen aus dem Keyboard gelöscht werden, zieht man diese lediglich mit der Maus auf das Mülleimer-Icon der Delete-Option. Sind alle gewünschten Veränderungen vorgenommen, wird das Keyboard durch einen Klick auf „Save” gespeichert und danach mittels „Lock” gesperrt. Mithilfe der Optionen „Load” und „Save” können werkspezifische Keyboards im System abgespeichert und jederzeit neu geladen werden – bspw., wenn man seine Textkorrekturen unterbricht oder sich das Keyboard auch für die Arbeit mit einem anderen Werk eignet.")]),e._v(" "),i("li",[e._v("Über die Schaltfläche 'Preset' können vorgefertigte Virtual-Keyboards ausgewählt werden.")]),e._v(" "),i("li",[e._v("Um einzelne Zeilen bei fehlerhafter Erkennung innerhalb der „Text View“ zu korrigieren, klicken Sie in die entsprechende Zeile hinein. Die daraufhin vertikal zentrierte Zeile kann nun bearbeitet werden. Befinden Sie sich innerhalb der „Page View“, so kann der zugehörige Zeilentext per Linksklick auf die entsprechende Zeile angezeigt werden. Im nun geöffneten Textfeld können ebenfalls Änderungen am Zeilentext vorgenommen werden. Um die jeweils nächste Zeile anzuwählen, betätigen Sie die „Tabulator“-Taste. Die weiteren Arbeitsschritte sind innerhalb beider Anzeigen äquivalent. Haben sie alle Eingriffe vorgenommen und liegt damit eine entsprechend fehlerfreie Zeile vor, betätigen Sie die „Enter“-Taste. Die soeben bearbeitete Zeile färbt sich grün, d. h.: Diese Zeile wird nach dem Speichern der bearbeiteten Seite über die Schaltfläche „SAVE RESULT“ (Shortcut: Strg + S) innerhalb von OCR4all nun automatisch als Ground Truth abgespeichert. Sie kann nun mit allen weiteren korrigierten Zeilen als Trainingsgrundlage werkspezifischer Modelle sowie zur Evaluation der genutzten OCR-Modelle dienen oder wird Ihnen bei der Generierung Ihrer Endergebnisse (s. u.) automatisch mit ausgegeben.")]),e._v(" "),i("li",[e._v("Stoßen Sie während Ihrer Korrekturarbeiten auf fehlerhafte Zeilenbilder (bspw. halbierte, an falscher Stelle getrennte Zeilen oder sogar Doppelzeilenbilder), so lassen Sie die entsprechende Textzeile leer und speichern darin keine Ground Truth, da diese Textinformationen in Kombination mit fehlerhaften Zeilenbildern zu Problemen während des Trainings führen könnten.")]),e._v(" "),i("li",[e._v("Wird während der Korrektur eines Werks mittels der Ground Truth Production durch den Benutzer festgestellt, dass der Grad der Erkennung durch gemischte Modelle aufgrund unterschiedlicher Faktoren noch nicht ausreicht, um eine manuelle, abschließende Textkorrektur ohne zu großen zeitlichen Aufwand durchzuführen, so bietet OCR4all die Option des Trainings werkspezifischer Modelle. Diese haben werkspezifisch im Allgemeinen höhere Erkennungsraten als gemischte Modelle.")])])])}),[],!1,null,null,null);n.default=t.exports}}]);