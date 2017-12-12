h = $("html");

var c = $("#menu").mmenu({
	extensions: {
		all: ["theme-dark", "fx-menu-slide", "pagedim-black"],
		"(min-width: 1430px)": ["widescreen"]
	},
// указывается тема, анимация, затемнение основной части при открытии меню,

navbar: {
	title: "Заголовок меню"
 },
 //заголовок. Можно использовать теги.
 pageScroll : {
 scroll : true, // прокрутка к якорю
 update : true, //прокручивать, даже если пункт обозначен как активный
 }
 //добавляем или удаляем класс is-active гамбургеру при открытии или закрытии меню соответственно.
}).data("mmenu"),
d = $("#hamburger").on("click", function(e) {
	e.preventDefault(), h.hasClass("mm-opened") ? c.close() : c.open()
}).children(".hamburger");
c.bind("close:finish", function() {
	setTimeout(function() {
		d.removeClass("is-active")
	}, 100)
}), c.bind("open:finish", function() {
	setTimeout(function() {
		d.addClass("is-active")
	}, 100)
})