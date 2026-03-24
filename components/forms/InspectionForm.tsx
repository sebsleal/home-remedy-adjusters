'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'
import { CheckCircle, Loader2, ArrowRight } from 'lucide-react'

const schema = z.object({
  name: z.string().min(2, 'Required'),
  phone: z.string().min(10, 'Enter a valid number'),
  email: z.string().email('Enter a valid email'),
  address: z.string().min(5, 'Enter your property address'),
  damageType: z.enum(['storm', 'water', 'roof', 'fire', 'other']),
})

type FormData = z.infer<typeof schema>

export default function InspectionForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { damageType: 'storm' },
  })

  const onSubmit = async (data: FormData) => {
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, preferredContact: 'either', message: 'Free inspection request' }),
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
        className="glass-gold rounded-2xl p-10 flex flex-col items-center text-center gap-5"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.1 }}
        >
          <CheckCircle size={52} className="text-gold" />
        </motion.div>
        <h3 className="font-cormorant font-600 text-[26px] tracking-heading uppercase text-off-white">
          Request Received!
        </h3>
        <p className="font-inter font-300 text-[14px] text-ivory/60 leading-relaxed max-w-sm">
          We&apos;ll call you within 24 hours to schedule your free inspection. Keep an eye on your phone.
        </p>
      </motion.div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="glass-gold rounded-2xl p-7 flex flex-col gap-4"
    >
      <div className="mb-1">
        <p className="font-cormorant font-600 text-[22px] tracking-heading uppercase text-off-white">
          Book Your Free Inspection
        </p>
        <div className="block w-8 h-px bg-gold mt-3" />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="label">Your Name *</label>
        <input {...register('name')} placeholder="Full name" className="input-base" />
        {errors.name && <p className="font-inter text-[11px] text-danger">{errors.name.message}</p>}
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="label">Phone Number *</label>
        <input {...register('phone')} type="tel" placeholder="(786) 000-0000" className="input-base" />
        {errors.phone && <p className="font-inter text-[11px] text-danger">{errors.phone.message}</p>}
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="label">Email *</label>
        <input {...register('email')} type="email" placeholder="your@email.com" className="input-base" />
        {errors.email && <p className="font-inter text-[11px] text-danger">{errors.email.message}</p>}
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="label">Property Address *</label>
        <input {...register('address')} placeholder="123 Main St, Miami, FL" className="input-base" />
        {errors.address && <p className="font-inter text-[11px] text-danger">{errors.address.message}</p>}
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="label">Type of Damage *</label>
        <select {...register('damageType')} className="input-base">
          <option value="storm">Storm / Hurricane</option>
          <option value="water">Water Damage</option>
          <option value="roof">Roof Damage</option>
          <option value="fire">Fire Damage</option>
          <option value="other">Not Sure / Other</option>
        </select>
      </div>

      {status === 'error' && (
        <p className="font-inter text-[12px] text-danger text-center">
          Something went wrong. Please call (786) 223-7867 directly.
        </p>
      )}

      <motion.button
        type="submit"
        disabled={status === 'loading'}
        className="flex items-center justify-center gap-2 font-inter font-500 text-[13px] uppercase tracking-label bg-gold text-teal-950 px-7 py-3.5 rounded-full hover:bg-gold-light transition-all duration-300 disabled:opacity-60 cursor-none group mt-1"
        whileHover={{ scale: status === 'loading' ? 1 : 1.02 }}
        whileTap={{ scale: status === 'loading' ? 1 : 0.98 }}
      >
        {status === 'loading' ? (
          <><Loader2 size={15} className="animate-spin" /> Booking...</>
        ) : (
          <>Book Free Inspection <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" /></>
        )}
      </motion.button>

      <p className="font-inter font-300 text-[11px] text-ivory/30 text-center">
        No obligation. No upfront cost. We contact you within 24 hours.
      </p>
    </form>
  )
}
