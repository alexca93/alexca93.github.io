(function($) {
    $(document).ready(function() {
        $('.ui.dropdown').dropdown({
            maxSelections: 5
        });
    });

    $('.btn.addProject').click(function() {
        $('.newProject').slideToggle();
    });

    var form = $('form.ui.form.form-horizontal');
    form.submit(function(event) {
        event.preventDefault();
        var form_status = $('<div class="form_status"></div>');
        var skills = "Skills:";
        var skills_values = $("#skills").val();
        if (skills_values.length > 0)
            skills_values.forEach(function(skill) {
                skills += " " + skill + ",";
            });
        $.ajax({
            url: $(this).attr('action'),
            method: "POST",
            data: {
                sujet: $("#sujet").val(),
                email: $("#email").val(),
                skills: $("#skills").val(),
                message: $("#message").val()
            },
            beforeSend: function() {
                form.prepend(form_status.html('<p class="alert alert-info"><span class="glyphicon glyphicon-repeat spin"></span> &nbsp;En cours de transfert...</p>').fadeIn());
            }
        }).done(function(data) {
            form_status.html('<p class="alert alert-success">Email bien envoyé !</p>').delay(1000).fadeOut();
            $('.newProject').delay(1000).slideUp("slow");
            $("input, textarea").val("");
            $('.ui.dropdown').dropdown('clear');
        });
    });
})(jQuery);
(function(i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function() {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-100064493-1', 'auto');
ga('send', 'pageview');