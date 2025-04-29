import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import EMAIL_CONFIG from '../Component/Email';
import ContactOptions from '../Component/ContactOptions';

function Contact() {
  const [vname, setVname] = useState("");
  const [vemail, setVemail] = useState("");
  const [vsubject, setVsubject] = useState("");
  const [vdesc, setVdesc] = useState("");
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSend = async (e) => {
    e.preventDefault();
    setStatus("");
    setIsSending(true);

    if (!vname || !vemail || !vdesc || !isValidEmail(vemail)) {
      setStatus("error");
      setIsSending(false);
      return;
    }

    try {
      await emailjs.send(
        EMAIL_CONFIG.SERVICE_ID,
        EMAIL_CONFIG.TEMPLATE_ID,
        {
          name: vname,
          email: vemail,
          title: vsubject,
          message: vdesc
        },
        EMAIL_CONFIG.USER_ID
      );
      setStatus("success");
      setVname(""); setVemail(""); setVsubject(""); setVdesc("");
    } catch {
      setStatus("error");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="w-full flex flex-col items-center py-10 px-4 bg-slate-400 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <h2 className="text-3xl font-bold mb-8 text-center tracking-wider">CONTACT ME</h2>

      <div className="w-full max-w-2xl bg-slate-100 dark:bg-gray-800 shadow-md rounded-lg p-6">
        <form className="flex flex-col gap-6" onSubmit={handleSend}>
          <input
            type="text"
            placeholder="Your name"
            value={vname}
            onChange={e => setVname(e.target.value)}
            className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400 bg-white dark:bg-gray-700 dark:border-gray-600"
          />
          <input
            type="email"
            placeholder="Your email"
            value={vemail}
            onChange={e => setVemail(e.target.value)}
            className={`p-3 rounded border ${vemail && !isValidEmail(vemail) ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-sky-400 bg-white dark:bg-gray-700 dark:border-gray-600`}
          />
          <input
            type="text"
            placeholder="Subject"
            value={vsubject}
            onChange={e => setVsubject(e.target.value)}
            className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400 bg-white dark:bg-gray-700 dark:border-gray-600"
          />
          <textarea
            rows="5"
            placeholder="Message"
            value={vdesc}
            onChange={e => setVdesc(e.target.value)}
            className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400 bg-white dark:bg-gray-700 dark:border-gray-600 resize-none"
          />

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-2">
            <ContactOptions />
            <button
              type="submit"
              disabled={isSending}
              className={`px-6 py-2 font-semibold rounded shadow transition-all ${
                isSending
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-sky-500 hover:bg-sky-600 text-white'
              }`}
            >
              {isSending ? (
                <span className="flex items-center gap-2">
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  Sending...
                </span>
              ) : (
                'Send Now'
              )}
            </button>
          </div>

          {status === "error" && (
            <p className="text-red-500 text-sm">
              ⚠️ Please fill out all fields correctly.
            </p>
          )}
          {status === "success" && (
            <p className="text-green-500 text-sm">
              ✅ Message sent successfully!
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default Contact;
