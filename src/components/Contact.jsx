import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Shubham Kumar",
          from_email: form.email,
          to_email: "Shubhamk5928@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          
          // Reset form after success
          setTimeout(() => {
            setForm({
              name: "",
              email: "",
              message: "",
            });
            setSuccess(false);
          }, 3000);
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Something went wrong. Please try again or contact me directly.");
        }
      );
  };

  const inputVariants = {
    focused: {
      scale: 1.02,
      boxShadow: "0 0 0 2px rgba(145, 94, 255, 0.3), 0 10px 40px rgba(145, 94, 255, 0.2)",
      transition: { duration: 0.3 }
    },
    unfocused: {
      scale: 1,
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3 }
    }
  };

  const buttonVariants = {
    idle: {
      scale: 1,
      boxShadow: "0 4px 20px rgba(145, 94, 255, 0.3)",
    },
    loading: {
      scale: 1.02,
      boxShadow: "0 6px 30px rgba(145, 94, 255, 0.4)",
    },
    success: {
      scale: 1.05,
      boxShadow: "0 8px 40px rgba(34, 197, 94, 0.4)",
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 8px 35px rgba(145, 94, 255, 0.5)",
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] relative'
      >
        {/* Glassmorphism Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#915EFF]/10 to-[#4A00E0]/5 rounded-3xl"></div>
        
        {/* Floating Elements */}
        <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-r from-[#915EFF] to-[#4A00E0] rounded-full opacity-20 blur-xl animate-pulse"></div>
        <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-r from-[#4A00E0] to-[#915EFF] rounded-full opacity-15 blur-2xl animate-pulse delay-1000"></div>

        <div className="relative z-10 p-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className={`${styles.sectionSubText} flex items-center gap-2`}>
              📧 Get in touch
            </p>
            <h3 className={`${styles.sectionHeadText} bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent`}>
              Contact.
            </h3>
            <div className="w-20 h-1 bg-gradient-to-r from-[#915EFF] to-[#4A00E0] rounded-full mt-2"></div>
          </motion.div>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='mt-12 flex flex-col gap-6'
          >
            {/* Name Field */}
            <motion.label 
              className='flex flex-col'
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <span className='text-white font-medium mb-3 flex items-center gap-2'>
                👤 Your Name
              </span>
              <motion.input
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                onFocus={() => setFocusedField('name')}
                onBlur={() => setFocusedField(null)}
                placeholder="What's your awesome name? ✨"
                className='bg-white/10 backdrop-blur-md py-4 px-6 placeholder:text-white/60 text-white rounded-xl outline-none border border-white/20 font-medium transition-all duration-300 hover:bg-white/15'
                variants={inputVariants}
                animate={focusedField === 'name' ? 'focused' : 'unfocused'}
                whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                required
              />
            </motion.label>

            {/* Email Field */}
            <motion.label 
              className='flex flex-col'
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <span className='text-white font-medium mb-3 flex items-center gap-2'>
                📧 Your Email
              </span>
              <motion.input
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                placeholder="your.awesome@email.com 🚀"
                className='bg-white/10 backdrop-blur-md py-4 px-6 placeholder:text-white/60 text-white rounded-xl outline-none border border-white/20 font-medium transition-all duration-300 hover:bg-white/15'
                variants={inputVariants}
                animate={focusedField === 'email' ? 'focused' : 'unfocused'}
                whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                required
              />
            </motion.label>

            {/* Message Field */}
            <motion.label 
              className='flex flex-col'
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <span className='text-white font-medium mb-3 flex items-center gap-2'>
                💬 Your Message
              </span>
              <motion.textarea
                rows={7}
                name='message'
                value={form.message}
                onChange={handleChange}
                onFocus={() => setFocusedField('message')}
                onBlur={() => setFocusedField(null)}
                placeholder='Tell me about your amazing project ideas! 💡'
                className='bg-white/10 backdrop-blur-md py-4 px-6 placeholder:text-white/60 text-white rounded-xl outline-none border border-white/20 font-medium resize-none transition-all duration-300 hover:bg-white/15'
                variants={inputVariants}
                animate={focusedField === 'message' ? 'focused' : 'unfocused'}
                whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                required
              />
            </motion.label>

            {/* Submit Button */}
            <motion.button
              type='submit'
              disabled={loading}
              className={`relative overflow-hidden py-4 px-8 rounded-xl outline-none w-fit font-bold text-white transition-all duration-300 ${
                success 
                  ? 'bg-gradient-to-r from-green-500 to-emerald-600' 
                  : 'bg-gradient-to-r from-[#915EFF] to-[#4A00E0]'
              }`}
              variants={buttonVariants}
              animate={loading ? 'loading' : success ? 'success' : 'idle'}
              whileHover={!loading && !success ? 'hover' : {}}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              {/* Button Background Animation */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
              
              {/* Button Content */}
              <span className="relative z-10 flex items-center gap-2">
                {loading ? (
                  <>
                    <motion.div
                      className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                    Sending... 🚀
                  </>
                ) : success ? (
                  <>
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      ✅
                    </motion.span>
                    Message Sent! 🎉
                  </>
                ) : (
                  <>
                    📨 Send Message
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      ✈️
                    </motion.span>
                  </>
                )}
              </span>

              {/* Success Confetti Effect */}
              {success && (
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-yellow-400 rounded-full"
                      style={{
                        left: `${20 + i * 15}%`,
                        top: '50%',
                      }}
                      initial={{ scale: 0, y: 0 }}
                      animate={{ 
                        scale: [0, 1, 0],
                        y: [-20, -40, -60],
                        opacity: [0, 1, 0]
                      }}
                      transition={{ 
                        duration: 1,
                        delay: i * 0.1,
                        ease: "easeOut"
                      }}
                    />
                  ))}
                </div>
              )}
            </motion.button>

            {/* Success Message */}
            {success && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-md border border-green-500/30 rounded-xl p-4"
              >
                <p className="text-green-300 font-medium flex items-center gap-2">
                  🎉 Thank you! I'll get back to you as soon as possible.
                </p>
              </motion.div>
            )}
          </form>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px] relative'
      >
        {/* Earth Canvas with Glass Effect */}
        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10"></div>
        <EarthCanvas />
        
        {/* Floating Contact Info */}
        <motion.div
          className="absolute top-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-white/80 text-sm font-medium">📍 Let's Connect!</p>
          <p className="text-[#915EFF] text-xs">Gurugram, India 🇮🇳</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");