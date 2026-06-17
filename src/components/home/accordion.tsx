import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const items = [
  {
    value: "item-1",
    trigger: "What can I do with your platform?",
    content:
      "Answer",
  },
  {
    value: "item-2",
    trigger: "Is my financial data and service?",
    content:
      "Absolutely, We use industry-standard encryption and multi-factor authentication to keep yor personal and financial information protected at all times.",
  },
  {
    value: "item-3",
    trigger: "Do I need to connect my bank accounts to use this app?",
    content:
      "Answer.",
  },
   {
    value: "item-4",
    trigger: "Can I set financial goals and monitor progress?",
    content:
      "Answer.",
  },
   {
    value: "item-5",
    trigger: "What platforms is this app available?",
    content:
      "Answer",
  },
]

export function AccordionBasic() {
  return (
    <Accordion
      type="single"
      collapsible
      defaultValue="item-1"
    >
      {items.map((item) => (
        <AccordionItem key={item.value} value={item.value}>
          <AccordionTrigger>{item.trigger}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
