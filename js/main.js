(function ($) {
    "use strict";

    if (localStorage.getItem('theme') === 'dark') {
        $("#theme-checkbox").prop("checked", true);
        $(".theme-mode-text").css("margin-top", "0");
    }


    $(document).ready(function () {

        // Side menu change item on click
        $(".navbar-nav .nav-item").on("click", function () {
            $(".navbar-nav .nav-item").removeClass("active");
            $(this).addClass("active");
        });

        // Add noscroll class to body when modal is opened
        $("#addItem").on("click", function () {
            $(".side-modal-backgdrop").toggleClass("d-none");
            $("body").toggleClass("noscroll");
        });

        // Show modal backdrop
        $(".close-sidemodal").on("click", function () {
            $(".side-modal-backgdrop").toggleClass("d-none");
            $("body").toggleClass("noscroll");
        });

        // Toggle side menu
        $("#toggle-sidemenu").on("click", function () {
            $("body").toggleClass("expanded");
            if ($("body").hasClass("expanded")) {
                $("#toggle-sidemenu").html('<i class="fa-solid fa-bars-staggered text-dark fa-xl"></i>');
            } else {
                $("#toggle-sidemenu").html('<i class="fa-solid fa-bars text-dark fa-xl"></i>');
            }
        });

        // Toggle mobile menu
        $("#toggle-mobilemenu, #close-sidemenu").on("click", function () {
            $("body").toggleClass("mobexpanded");
            $("body").toggleClass("noscroll");
            $(".side-menu").toggleClass("d-none");
            $(".side-menu").toggleClass("d-flex");
            $(".mobile-menu-backdrop").toggleClass("d-none");
        });

        // Minimize side menu on smaller screens
        $(window).bind("load resize", function () {
            var width = $(window).width();
            if (width <= 1200) {
                $("body").removeClass("expanded");
                $("#toggle-sidemenu").html('<i class="fa-solid fa-bars text-dark fa-xl"></i>');
            } else {
                $("body").removeClass("expanded");
                $("body").addClass("expanded");
                $("#toggle-sidemenu").html('<i class="fa-solid fa-bars-staggered text-dark fa-xl"></i>');
            }
        });

        // Toggle dark theme
        $("#theme-checkbox").on("click", function () {
            $("body").toggleClass("dark-theme");
            $("table").toggleClass("table-dark");
            if ($("body").hasClass("dark-theme")) {
                localStorage.setItem('theme', 'dark');
                $(".theme-mode-text").css("margin-top", "0");
            } else {
                localStorage.setItem('theme', 'light');
                $(".theme-mode-text").css("margin-top", "-24px");
            }
        });

    });




    // Add country row
    $('body').on('click', '#addCountryRow', function (e) {
        const htmlCountryRow = '<tr> <td scope="row" class="noprint"><button type="button" class="btn btn-danger minbtn removeCountryRow"><i class="fa-solid fa-minus"></i></button></td> <td> <select class="selectpicker" title="Select Ingredient" aria-label="Select Ingredient" data-size="5" data-live-search="true"> <option value="1950">Ingredient #1950</option> <option value="1951">Ingredient #1951</option> <option value="1952">Ingredient #1952</option> <option value="1953">Ingredient #1953</option> <option value="1954">Ingredient #1954</option> <option value="1955">Ingredient #1955</option> <option value="1956">Ingredient #1956</option> <option value="1957">Ingredient #1957</option> <option value="1958">Ingredient #1958</option> <option value="1959">Ingredient #1959</option> <option value="1960">Ingredient #1960</option> <option value="1961">Ingredient #1961</option> <option value="1962">Ingredient #1962</option> <option value="1963">Ingredient #1963</option> <option value="1964">Ingredient #1964</option> <option value="1965">Ingredient #1965</option> <option value="1966">Ingredient #1966</option> <option value="1967">Ingredient #1967</option> <option value="1968">Ingredient #1968</option> <option value="1969">Ingredient #1969</option> <option value="1970">Ingredient #1970</option> <option value="1971">Ingredient #1971</option> <option value="1972">Ingredient #1972</option> <option value="1973">Ingredient #1973</option> <option value="1974">Ingredient #1974</option> <option value="1975">Ingredient #1975</option> <option value="1976">Ingredient #1976</option> <option value="1977">Ingredient #1977</option> <option value="1978">Ingredient #1978</option> <option value="1979">Ingredient #1979</option> <option value="1980">Ingredient #1980</option> <option value="1981">Ingredient #1981</option> <option value="1982">Ingredient #1982</option> <option value="1983">Ingredient #1983</option> <option value="1984">Ingredient #1984</option> <option value="1985">Ingredient #1985</option> <option value="1986">Ingredient #1986</option> <option value="1987">Ingredient #1987</option> <option value="1988">Ingredient #1988</option> <option value="1989">Ingredient #1989</option> <option value="1990">Ingredient #1990</option> <option value="1991">Ingredient #1991</option> <option value="1992">Ingredient #1992</option> <option value="1993">Ingredient #1993</option> <option value="1994">Ingredient #1994</option> <option value="1995">Ingredient #1995</option> <option value="1996">Ingredient #1996</option> <option value="1997">Ingredient #1997</option> <option value="1998">Ingredient #1998</option> <option value="1999">Ingredient #1999</option> <option value="2000">Ingredient #2000</option> <option value="2001">Ingredient #2001</option> <option value="2002">Ingredient #2002</option> <option value="2003">Ingredient #2003</option> <option value="2004">Ingredient #2004</option> <option value="2005">Ingredient #2005</option> <option value="2006">Ingredient #2006</option> <option value="2007">Ingredient #2007</option> <option value="2008">Ingredient #2008</option> <option value="2009">Ingredient #2009</option> <option value="2010">Ingredient #2010</option> <option value="2011">Ingredient #2011</option> <option value="2012">Ingredient #2012</option> <option value="2013">Ingredient #2013</option> <option value="2014">Ingredient #2014</option> <option value="2015">Ingredient #2015</option> <option value="2016">Ingredient #2016</option> <option value="2017">Ingredient #2017</option> <option value="2018">Ingredient #2018</option> <option value="2019">Ingredient #2019</option> <option value="2020">Ingredient #2020</option> <option value="2021">Ingredient #2021</option> <option value="2022">Ingredient #2022</option> <option value="2023">Ingredient #2023</option> <option value="2024">Ingredient #2024</option> <option value="2025">Ingredient #2025</option> <option value="2026">Ingredient #2026</option> <option value="2027">Ingredient #2027</option> <option value="2028">Ingredient #2028</option> <option value="2029">Ingredient #2029</option> <option value="2030">Ingredient #2030</option> </select> </td> <td> <div class="input-group"> <input type="number" class="form-control" placeholder="0" onblur="findTotalGrams()" aria-label="Grams" aria-describedby="basic-addon2" value="0"> <span class="input-group-text">g</span> </div> </td> <td><span class="proportion"></span></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> </tr>';
        var thisTableRow = $(this).closest('tr');

        $(htmlCountryRow).insertBefore(thisTableRow);

        findTotalGrams();

        $('.selectpicker').selectpicker('refresh');
    });

    // Remove country row
    $('body').on('click', '.removeCountryRow', function (e) {
        $(this).closest('tr').remove();
        findTotalGrams();
    });


    // Select all checkboxes in a table
    $('body').on('click', '.selectallcheckbox', function (e) {
        var table = $(e.target).closest('table');
        $('td input:checkbox', table).prop('checked', this.checked);
    });



    // Print Table
    function printTable() {
        window.print();
    }
    $('body').on('click', '#print-recipe', function (e) {
        printTable();
    })



})(jQuery);