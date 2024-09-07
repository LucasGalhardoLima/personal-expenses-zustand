import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export function ExpenseItem({
  expenseItem: { title, amount, tag, image },
}: {
  expenseItem: {
    title: string;
    amount: number;
    tag: string;
    image: string;
  };
}) {
  return (
    <div className="space-y-8">
      <div className="items-center grid gap-2 grid-cols-10">
        <Avatar className="col-span-1">
          <AvatarImage src={image} />
          <AvatarFallback>{title.slice(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1 col-span-3">
          <p className="text-sm font-medium leading-none">{title}</p>
        </div>
        <div className="col-span-2 justify-self-end">
          <Badge>{tag}</Badge>
        </div>
        <p className="font-medium col-span-4 justify-self-end">
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(amount)}
        </p>
      </div>
    </div>
  );
}
