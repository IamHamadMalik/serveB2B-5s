"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] p-0 overflow-hidden">
        <DialogHeader className="p-6 pb-0">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold text-gray-900">Get Started with ServeB2B</DialogTitle>
            <Button variant="ghost" size="icon" onClick={onClose} className="h-8 w-8 rounded-full">
              <X className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-gray-600 mt-2">
            Tell us about your Salesforce project and we'll get back to you within 24 hours.
          </p>
        </DialogHeader>

        <div className="px-6 pb-6">
          <div className="bg-gray-50 rounded-lg p-4 overflow-hidden">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLScYGIxYShISSY4OucYhWuxselpUJH5Kr3aCEgnXsz4DUznOBg/viewform?embedded=true"
              width="100%"
              height="600"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              className="rounded-lg"
              title="Contact Form"
            >
              Loading…
            </iframe>
          </div>

          <div className="mt-4 text-center">
            <p className="text-sm text-gray-500">
              Prefer email? Reach us directly at{" "}
              <a href="mailto:hello@serveb2b.com" className="text-blue-600 hover:underline">
                hello@serveb2b.com
              </a>
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
