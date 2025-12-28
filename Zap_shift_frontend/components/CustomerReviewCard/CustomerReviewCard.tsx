import Image from "next/image";
import reviewQuote from "../../public/assets/reviewQuote.png";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

const CustomerReviewCard = () => {
  return (
    <div className="h-full w-full max-w-md rounded-3xl bg-white px-6 py-7 shadow-lg shadow-slate-900/10 sm:max-w-lg sm:px-8 sm:py-8">
      <div>
        <Image src={reviewQuote} alt="review quote" className="h-8 w-auto" />
      </div>
      <p className="mt-3 text-justify text-sm text-slate-700">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit similique
        repellendus ab suscipit excepturi animi maiores dolores possimus quod
        voluptas, iusto sunt dolorem natus quos harum.
      </p>
      <div>
        <div className="mt-5 flex items-center gap-x-3 border-t-2 border-dashed border-slate-300 pt-4">
          <Avatar>
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="@shadcn"
              className="h-12 w-12 rounded-full object-cover"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="font-semibold text-slate-900">Awlad Hossain</h1>
            <p className="text-sm text-slate-600">Senior Product Designer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReviewCard;
