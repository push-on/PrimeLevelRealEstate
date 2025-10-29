import emailjs from '@emailjs/browser'

// Replace these with your actual EmailJS credentials
const SERVICE_ID = 'service_your_service_id'
const TEMPLATE_ID = 'template_your_template_id'
const PUBLIC_KEY = 'your_public_key'

interface EmailData {
	fullName: string
	email: string
	phone?: string
	service: string
	message: string
}

export const sendEmail = async (data: EmailData) => {
	try {
		const response = await emailjs.send(
			SERVICE_ID,
			TEMPLATE_ID,
			{
				from_name: data.fullName,
				from_email: data.email,
				phone: data.phone || 'Not provided',
				service: data.service,
				message: data.message,
				to_name: 'Prime Level Real Estate',
			},
			PUBLIC_KEY
		)

		return response
	} catch (error) {
		console.error('Email error:', error)
		throw error
	}
}