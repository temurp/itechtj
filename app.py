from flask import Flask, render_template, request, flash
from forms import ContactForm
from flask_mail import Message, Mail
import secret

mail = Mail()

app = Flask(__name__)
app.secret_key = secret.APP_SECRET_KEY

app.config['MAIL_SERVER']='smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USERNAME'] = secret.MAIL_ACCOUNT
app.config['MAIL_PASSWORD'] = secret.MAIL_PASS
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True

mail.init_app(app)

@app.route('/', methods=['GET', 'POST'])
def home():
	form = ContactForm()
	if request.method == 'POST':
		if form.validate() == False:
			flash("All fields are required.")
			return render_template('index.html', form=form)
		else:
			msg = Message('New request from itech.tj',sender=secret.MAIL_ACCOUNT, recipients=['temurpallaev@gmail.com'])
			price = form.uprice.data.split(',')
			service1, service2, service3, support = price[4],price[5],price[6],price[7]
			if service1 != '0':
				service1 = 'Выезд инженера'
			else:
				service1 = ''

			if service2 != '0':
				service2 = 'Мониторинг'
			else:
				service2 = ''

			if service3 != '0':
				service3 = 'Минет'
			else:
				service3 = ''

			if support == '300':
				support = 'Стандартная'
			elif support == '400':
				support = '24 на 7'
			else:
				support = 'Нет'

			msg.body = """
			From: %s <%s>
			%s
			Данный клиент оставил заявку на сумму %s сомони.
			Кол-во компьютеров - %s.
			Кол-во принтеров - %s.
			Кол-во серверов - %s.
			Доп. услуги - %s, %s, %s.
			Поддержка - %s.
			""" % (form.namee.data, form.emaile.data,form.phone.data,price[0],price[1],price[2],price[3],service1,service2,service3,support)
			mail.send(msg)
			return render_template('index.html', success=True)
	elif request.method == 'GET':
		return render_template('index.html', form=form)

if __name__ == '__main__':
	app.run(debug=True)
