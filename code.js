<script>
var passw = "ad";
var namm = "as"
var floo = "ad"
$('body').terminal(
{
    pass: function(password) {
	if(password == "qwerty"){
		this.echo('correct password, what is your name?');
		passw = password
	}
        else{
		this.echo('wrong password');
	}
    },
    name: function(names) {
	if(passw == "qwerty"){
		this.echo('good name, ' + names + '. Which floor do you live in?');
		namm = names
	}
        else{
		this.echo('you hanve not put the password');
	}
    },
    floor: function(floors) {
	if(passw == "qwerty"){
		this.echo('nice floor, ' + floors + '. Please click the link and submit it');
		floo = floors
		this.echo('data: ' + namm + ' ' + floors + ' ' + passw);
	}
        else{
		this.echo('you hanve not put the password');
	}
    }
},
{
    greetings: 'Welcome to the weapon system, please put in the password, use the command pass followed by the password'
});
</script>
