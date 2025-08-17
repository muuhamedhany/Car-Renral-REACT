import React, { useEffect, useRef, useState } from 'react'
import CarImg from '../images/faq/car.png'

const FAQ = () => {
  const faqItems = [
    {
      question: 'What is special about comparing rental car deals?',
      answer:
        "Comparing rental car deals lets you find the best value by checking prices, vehicle options, policies, and extras across multiple companies. You'll often discover better promotions and more suitable vehicles when you compare rather than booking the first option you see.",
    },
    {
      question: 'How do I find the car rental deals?',
      answer:
        'You can find car rental deals by researching online and comparing prices from different rental companies. Websites such as Expedia, Kayak, and Travelocity allow you to compare prices and view available rental options. It is also recommended to sign up for email newsletters and follow rental car companies on social media to be informed of any special deals or promotions.',
    },
    {
      question: 'How do I find such low rental car prices?',
      answer:
        'Book early, compare multiple providers, and be flexible with pickup locations and dates. Look for off-airport locations, avoid unnecessary add-ons, and check for memberships or credit card perks that include discounts or insurance coverage.',
    },
  ]

  const [openIndex, setOpenIndex] = useState(1)

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index))
  }

  const AccordionItem = ({ item, index, isOpen, onToggle }) => {
    const contentRef = useRef(null)
    const [height, setHeight] = useState(0)

    useEffect(() => {
      if (isOpen) {
        setHeight(contentRef.current ? contentRef.current.scrollHeight : 0)
      } else {
        const currentHeight = contentRef.current ? contentRef.current.scrollHeight : 0
        setHeight(currentHeight)
        requestAnimationFrame(() => {
          setHeight(0)
        })
      }
    }, [isOpen])

    useEffect(() => {
      const onResize = () => {
        if (isOpen && contentRef.current) {
          setHeight(contentRef.current.scrollHeight)
        }
      }
      window.addEventListener('resize', onResize)
      return () => window.removeEventListener('resize', onResize)
    }, [isOpen])

    return (
      <div className="border-b last:border-b-0">
        <button
          onClick={onToggle}
          className={`w-full text-left p-5 Normal font-semibold transition-colors ${
            isOpen ? 'bg-[#ff4d31] text-white' : 'bg-surface'
          }`}
          aria-expanded={isOpen}
        >
          {index + 1}. {item.question}
        </button>
        <div style={{ height, overflow: 'hidden', transition: 'height 300ms ease' }}>
          <div ref={contentRef} className="bg-surface p-6">
            <p className="Paragraph text-[#8f8e8b]">{item.answer}</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <section id="FAQ" className="mb-50">
      <div className="cont">
        <div className="text-center flex flex-col items-center justify-center">
          <h4 className="Normal font-semibold">FAQ</h4>
          <h2 className="Heading font-bold">Frequently Asked Questions</h2>
          <p className="Paragraph text-[#8f8e8b] md:w-200 mt-5">
            Frequently Asked Questions About the Car Rental Booking Process on Our Website: Answers to
            Common Concerns and Inquiries.
          </p>
        </div>

        <div className="flex flex-col gap-15 items-center mt-15">
          <div className="hidden md:block">
            <img src={CarImg} alt="FAQ car" className="md:block hidden absolute left-0 z-[-1] w-80" />
          </div>

          <div className="rounded-lg md:w-200 shadowPrim overflow-hidden bg-surface">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                item={item}
                index={index}
                isOpen={openIndex === index}
                onToggle={() => toggle(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ