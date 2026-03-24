'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'
import { CheckCircle, Loader2 } from 'lucide-react'
import { staggerContainer, fadeUp } from '@/lib/animations'

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().min(10, 'Enter a valid phone number'),
  email: z.string().email('Enter a valid email'),
  address: z.string().min(5, 'Enter your property address'),
  damageType: z.enum(['storm', 'water', 'roof', 'fire', 'other']),
  message: z.string().optional(),
  preferredContact: z.enum(['phone', 'email', 'either']),
})

type FormData = z.infer<typeof schema>

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { preferredContact: 'either', damageType: 'storm' },
  })

  const onSubmit = async (data: FormData) => {
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass rounded-2xl p-10 flex flex-col items-center text-center gap-5"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.1 }}
        >
          <CheckCircle size={48} className="text-gold" />
        </motion.div>
        <h3 className="font-cormorant font-600 text-[24px] tracking-heading uppercase text-off-white">
          We&apos;ll Be In Touch!
        </h3>
        <p className="font-inter font-300 text-[14px] text-ivory/60 leading-relaxed max-w-sm">
          Thank you for reaching out. One of our licensed adjusters will contact you within 24 hours to discuss your claim.
        </p>
      </motion.div>
    )
  }

  return (
    <motion.form
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      onSubmit={handleSubmit(onSubmit)}
      className="glass rounded-2xl p-7 flex flex-col gap-5"
    >
      <motion.h3 variants={fadeUp} className="font-cormorant font-600 text-[22px] tracking-heading uppercase text-off-white">
        Send Us A Message
      </motion.h3>
      <motion.div variants={fadeUp} className="block w-8 h-px bg-gold" />

      <div className="grid md:grid-cols-2 gap-4">
        <motion.div variants={fadeUp} className="flex flex-col gap-1.5">
          <label className="label">Full Name *</label>
          <input {...register('name')} placeholder="John Smith" className="input-base" />
          {errors.name && <p className="font-inter text-[11px] text-danger">{errors.name.message}</p>}
        </motion.div>
        <motion.div variants={fadeUp} className="flex flex-col gap-1.5">
          <label className="label">Phone *</label>
          <input {...register('phone')} type="tel" placeholder="(786) 000-0000" className="input-base" />
          {errors.phone && <p className="font-inter text-[11px] text-danger">{errors.phone.message}</p>}
        </motion.div>
      </div>

      <motion.div variants={fadeUp} className="flex flex-col gap-1.5">
        <label className="label">Email *</label>
        <input {...register('email')} type="email" placeholder="john@example.com" className="input-base" />
        {errors.email && <p className="font-inter text-[11px] text-danger">{errors.email.message}</p>}
      </motion.div>

      <motion.div variants={fadeUp} className="flex flex-col gap-1.5">
        <label className="label">Property Address *</label>
        <input {...register('address')} placeholder="123 Main St, Miami, FL 33016" className="input-base" />
        {errors.address && <p className="font-inter text-[11px] text-danger">{errors.address.message}</p>}
      </motion.div>

      <div className="grid md:grid-cols-2 gap-4">
        <motion.div variants={fadeUp} className="flex flex-col gap-1.5">
          <label className="label">Damage Type *</label>
          <select {...register('damageType')} className="input-base">
            <option value="storm">Storm / Hurricane</option>
            <option value="water">Water Damage</option>
            <option value="roof">Roof Damage</option>
            <option value="fire">Fire Damage</option>
            <option value="other">Other</option>
          </select>
        </motion.div>
        <motion.div variants={fadeUp} className="flex flex-col gap-1.5">
          <label className="label">Preferred Contact</label>
          <select {...register('preferredContact')} className="input-base">
            <option value="either">Either</option>
            <option value="phone">Phone</option>
            <option value="email">Email</option>
          </select>
        </motion.div>
      </div>

      <motion.div variants={fadeUp} className="flex flex-col gap-1.5">
        <label className="label">Message (optional)</label>
        <textarea
          {...register('message')}
          rows={4}
          placeholder="Briefly describe the damage..."
          className="input-base resize-none"
        />
      </motion.div>

      {status === 'error' && (
        <p className="font-inter text-[13px] text-danger text-center">
          Something went wrong. Please call us at (786) 223-7867 or try again.
        </p>
      )}

      <motion.button
        variants={fadeUp}
        type="submit"
        disabled={status === 'loading'}
        className="flex items-center justify-center gap-2 font-inter font-500 text-[13px] uppercase tracking-label bg-gold text-teal-950 px-7 py-3.5 rounded-full hover:bg-gold-light transition-all duration-300 disabled:opacity-60 cursor-none"
        whileHover={{ scale: status === 'loading' ? 1 : 1.02 }}
        whileTap={{ scale: status === 'loading' ? 1 : 0.98 }}
      >
        {status === 'loading' ? (
          <><Loader2 size={15} className="animate-spin" /> Sending...</>
        ) : 'Send Message'}
      </motion.button>
    </motion.form>
  )
}
