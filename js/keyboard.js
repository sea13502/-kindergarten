function RandomSort(b, a) {
	return Math.random() - .5
}
function getRandomNum() {
	var b = [],
		a;
	for (a = 0; 10 > a; a++) b[a] = a;
	b.sort(RandomSort);
	return b
}
function getRandomChar() {
	var b = [],
		a, d;
	a = 0;
	for (d = 97; 123 > d; a++, d++) b[a] = d;
	b.sort(RandomSort);
	for (a = 0; a < b.length; a++) b[a] = String.fromCharCode(b[a]);
	return b
}
function showKeyboard(b) {
	var a = $("#yh_KeyBoard");
	if (0 != a.length) return a.remove(), !1;
	var a = $('<div id="yh_KeyBoard" class="kbdiv"></div>'),
		d = 0,
		c = '<div class="kbtable">';
	numArray = getRandomNum();
	charArray = getRandomChar();
	for (var d = 0; d < 10; d++) c += '<em class="kbkey">' + numArray[d] + "</em>";
	c += '<em class="kbkey">X</em></div><table><tr>';
	c += '<td height=35><em id="kbclose">确定</em></td>';
	c += '<td><em id="kbback">退格</em></td><td><span style=color:#FF0000;font-weight:bold;>输入错误请按左侧退格删除</span></td>';
	c += "</tr></table></div>";
	a.html(c);
	a.appendTo("body");
	$("em", a).mouseover(function() {
		this.className += " kbmouseover"
	}).mouseout(function() {
		this.className = this.className.replace(" kbmouseover", "")
	}).click(function() {
		if ("kbclose" == this.id) return aa(b), a.remove(), !1;
		if ("kbback" == this.id) {
			var c = $("#" + b).val();
			$("#" + b).val(c.substr(0, c.length - 1));
			return !1
		}
		$("#" + b).attr("value", $("#" + b).val() + this.innerHTML)
	});
	var d = $("#" + b).offset(),
		c = d.left,
		e = $("#" + b).height();
	a.css({
		left: c + "px",
		top: d.top + e + 8 + "px",
		position: "absolute",
		"z-index": "100"
	});
	return !1
};