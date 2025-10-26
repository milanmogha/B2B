import { useState, FormEvent } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
  const [formStatus, setFormStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);
    const data = {
      company_name: formData.get('company') as string,
      contact_name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      project_type: formData.get('projectType') as string,
      message: formData.get('message') as string,
    };

    try {
      const { error } = await supabase
        .from('enquiries')
        .insert([data]);

      if (error) throw error;

      setFormStatus('success');
      (e.target as HTMLFormElement).reset();

      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus('error');
      setErrorMessage('Unable to submit enquiry. Please try again or contact us directly.');
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16">
          {/* Left column - Contact info */}
          <div className="mb-12 lg:mb-0">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-6">
              Get in Touch
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Our sales team is ready to discuss your project requirements and provide detailed quotes. We typically respond to enquiries within 4 business hours.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  Sales Enquiries
                </h3>
                <a href="tel:+1234567890" className="text-lg text-slate-900 hover:text-slate-700 font-medium">
                  +1 (234) 567-890
                </a>
                <br />
                <a href="mailto:sales@buildmaster.com" className="text-lg text-slate-900 hover:text-slate-700 font-medium">
                  sales@buildmaster.com
                </a>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  Head Office
                </h3>
                <address className="text-slate-600 not-italic">
                  123 Industrial Boulevard<br />
                  Manufacturing District<br />
                  Your City, State 12345
                </address>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  Business Hours
                </h3>
                <p className="text-slate-600">
                  Monday - Friday: 7:00 AM - 6:00 PM<br />
                  Saturday: 8:00 AM - 2:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>

          {/* Right column - Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Request a Quote
            </h3>

            {formStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md flex items-start gap-3" role="alert">
                <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="text-green-800 font-medium">Thank you for your enquiry!</p>
                  <p className="text-green-700 text-sm mt-1">Our sales team will contact you shortly.</p>
                </div>
              </div>
            )}

            {formStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md flex items-start gap-3" role="alert">
                <AlertCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="text-red-800 font-medium">Submission failed</p>
                  <p className="text-red-700 text-sm mt-1">{errorMessage}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                  Company Name <span className="text-red-500" aria-label="required">*</span>
                </label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  required
                  className="w-full px-4 py-2.5 border border-slate-300 rounded-md focus:ring-2 focus:ring-slate-800 focus:border-transparent transition-colors"
                  placeholder="Your Company Ltd."
                />
              </div>

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                  Contact Name <span className="text-red-500" aria-label="required">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="w-full px-4 py-2.5 border border-slate-300 rounded-md focus:ring-2 focus:ring-slate-800 focus:border-transparent transition-colors"
                  placeholder="John Smith"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email <span className="text-red-500" aria-label="required">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-md focus:ring-2 focus:ring-slate-800 focus:border-transparent transition-colors"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                    Phone <span className="text-red-500" aria-label="required">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    required
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-md focus:ring-2 focus:ring-slate-800 focus:border-transparent transition-colors"
                    placeholder="+1 (234) 567-890"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="projectType" className="block text-sm font-medium text-slate-700 mb-2">
                  Project Type <span className="text-red-500" aria-label="required">*</span>
                </label>
                <select
                  name="projectType"
                  id="projectType"
                  required
                  className="w-full px-4 py-2.5 border border-slate-300 rounded-md focus:ring-2 focus:ring-slate-800 focus:border-transparent transition-colors bg-white"
                >
                  <option value="">Select project type</option>
                  <option value="commercial">Commercial Building</option>
                  <option value="industrial">Industrial Facility</option>
                  <option value="infrastructure">Infrastructure</option>
                  <option value="renovation">Renovation/Retrofit</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Project Details <span className="text-red-500" aria-label="required">*</span>
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  required
                  className="w-full px-4 py-2.5 border border-slate-300 rounded-md focus:ring-2 focus:ring-slate-800 focus:border-transparent transition-colors resize-none"
                  placeholder="Tell us about your project requirements, timeline, and any specific materials you need..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={formStatus === 'submitting'}
                className="w-full inline-flex items-center justify-center px-6 py-3.5 bg-slate-800 text-white font-semibold rounded-md hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {formStatus === 'submitting' ? (
                  <>
                    <span className="inline-block animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full" aria-hidden="true"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Enquiry
                    <Send className="ml-2 h-5 w-5" aria-hidden="true" />
                  </>
                )}
              </button>

              <p className="text-xs text-slate-500 text-center">
                By submitting this form, you agree to our privacy policy and terms of service.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
