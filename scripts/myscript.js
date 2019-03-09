 var date = new Date();
    var currentMonth = date.getMonth();
                    var currentDate = date.getDate();
                    var currentYear = date.getFullYear();
                    var today=new Date(currentYear, currentMonth, currentDate);
                        var week = new Date(currentYear, currentMonth, currentDate + 6);
                        var fdays = new Date(currentYear, currentMonth, currentDate + 14);
                        var tedays = new Date(currentYear, currentMonth, currentDate + 27);                        
                        $("#r1:radio").click(function () {
                            rdrp(today, week);
                            $("#from").attr("disabled", "disabled"); 
                            $("#to").attr("disabled", "disabled"); 
                            
                        });
                        $("#r2:radio").click(function () {
                            rdrp(today, fdays);
                            $("#from").attr("disabled", "disabled"); 
                            $("#to").attr("disabled", "disabled"); 
                        });
                        $("#r3:radio").click(function () {
                            rdrp(today, tedays);
                            $("#from").attr("disabled", "disabled"); 
                            $("#to").attr("disabled", "disabled"); 
                        });
                        $("#r4:radio").click(function () {
                            rdrp(today, week);
                            $("#from").removeAttr("disabled");
                            $("#to").removeAttr("disabled"); 
                            
                        });
          function rdrp (from,to) {
                    $('input[name="from"]').daterangepicker({
                        minDate: new Date(currentYear, currentMonth, currentDate),
                        autoApply: true
                        , dateFormat: 'yy-mm-dd'
                        , startDate: moment(from).add('days')
                        , endDate: moment(to).add('days')
                        , locale: {
                            format: 'ddd, DD/MM'
                        }
                    });
}
                function init() {
                    var options = {
                        types: ['(cities)']
                    };

                    var input = document.getElementById('locationName');
                    var input1 = document.getElementById('locationName2');
                    
                    var autocomplete = new google.maps.places.Autocomplete(input, options);
                    var autocomplete1 = new google.maps.places.Autocomplete(input1, options);
                    rdrp(today,week);
                    $(".dropdown-item").css('background-color', 'white');
                }
                google.maps.event.addDomListener(window, 'load', init);

                $(window).click(function () {
                    event.stopPropagation();
                });
                $('.dropdown-menu').click(function (event) {
                    event.stopPropagation();
                });
                $('#myForm').click(function (event) {
                    event.stopPropagation();
                });
                $('.btn-number').click(function (e) {
                    e.preventDefault();
        
                    fieldName = $(this).attr('data-field');
                    type = $(this).attr('data-type');
                    var input = $("input[name='" + fieldName + "']");
                    var currentVal = parseInt(input.val());
                    if (!isNaN(currentVal)) {
                        if (type == 'minus') {
        
                            if (currentVal > input.attr('min')) {
                                input.val(currentVal - 1).change();
                            }
                            if (parseInt(input.val()) == input.attr('min')) {
                                $(this).attr('disabled', true);
                            }
                            saveDetails();
        
                        } else if (type == 'plus') {
        
                            if (currentVal < input.attr('max')) {
                                input.val(currentVal + 1).change();
                            }
                            if (parseInt(input.val()) == input.attr('max')) {
                                $(this).attr('disabled', true);
                            }
                            saveDetails();
        
                        }
                    } else {
                        input.val(0);
                    }
                });
                $('.input-number').focusin(function () {
                    $(this).data('oldValue', $(this).val());
                });
                $('.input-number').change(function () {
        
                    minValue = parseInt($(this).attr('min'));
                    maxValue = parseInt($(this).attr('max'));
                    valueCurrent = parseInt($(this).val());
        
                    name = $(this).attr('name');
                    if (valueCurrent >= minValue) {
                        $(".btn-number[data-type='minus'][data-field='" + name + "']").removeAttr('disabled')
                    } else {
                        alert('Sorry, the minimum value was reached');
                        $(this).val($(this).data('oldValue'));
                    }
                    if (valueCurrent <= maxValue) {
                        $(".btn-number[data-type='plus'][data-field='" + name + "']").removeAttr('disabled')
                    } else {
                        alert('Sorry, the maximum value was reached');
                        $(this).val($(this).data('oldValue'));
                    }
        
        
                });
                $(".input-number").keydown(function (e) {
                    // Allow: backspace, delete, tab, escape, enter and .
                    if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
                        // Allow: Ctrl+A
                        (e.keyCode == 65 && e.ctrlKey === true) ||
                        // Allow: home, end, left, right
                        (e.keyCode >= 35 && e.keyCode <= 39)) {
                        // let it happen, don't do anything
                        return;
                    }
                    // Ensure that it is a number and stop the keypress
                    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
                        e.preventDefault();
                    }
                });
                document.querySelector('.close').addEventListener('click', function() {
                    saveDetails();
                    $("#dropdownMenuButton").click();
                  });
