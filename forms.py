from flask_wtf import Form, validators
from wtforms.fields import TextField, TextAreaField, SubmitField, DecimalField
import wtforms

class ContactForm(Form):
	namee = TextField("Ваше имя", [wtforms.validators.Required('Please enter your name')])
	emaile = TextField("Ваш e-mail", [wtforms.validators.Required('Please enter your email'), wtforms.validators.Email("Please enter your email address.")])
	uprice = TextField("Сумма обслуживания", [wtforms.validators.Required('Please enter a message')])
	submit = SubmitField("Отправить")
	phone = DecimalField("Телефон", [wtforms.validators.Required('Please enter your phone')])
