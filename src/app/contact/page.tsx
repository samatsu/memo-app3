"use client";
import { sendMessage } from "@/lib/EmailAction";
import { Metadata } from "next";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useFormState } from "react-dom";

// export const metadata: Metadata = {
//   title: "お問い合わせ",
//   description: "お問い合わせのページ",
// };

const initialState = {
  errors: {},
  message: null,
  success: false,
};

export default function ContactUs() {
  // @ts-ignore
  const [state, formAction] = useFormState(sendMessage, initialState);
  if (state.success) {
    return (
      <div className="w-full max-w-lg mx-auto">
        <div className="m-2">送信に成功しました。</div>
        <Link
          href="/"
          className="m-2 shadow bg-teal-500  hover:bg-teal-400  focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
        >
          トップに戻る
        </Link>
      </div>
    );
  }
  return (
    <form className="w-full max-w-lg  mx-auto" action={formAction}>
      {state.message && (
        <div className="text-red-500 italic">{state.message}</div>
      )}
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-name"
          >
            名前
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-name"
            type="text"
            name="name"
            placeholder="名前を入力してください"
            maxLength={255}
            required
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-email"
          >
            Eメール
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-email"
            name="email"
            type="email"
            placeholder="Eメールを入力してください"
            maxLength={255}
            required
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-email"
          >
            コメント
          </label>
          <textarea
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 resize-y rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-email"
            name="comment"
            rows={5}
            maxLength={400}
            placeholder="コメントを入力してください"
            required
          />
        </div>
      </div>

      <div className="text-center">
        <button
          className="shadow bg-teal-500  hover:bg-teal-400  focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          送信
        </button>
        <Link
          href="/"
          className="bg-transparent hover:bg-teal-500 text-teal-500  ml-3  focus:shadow-outline focus:outline-none hover:text-white font-bold py-2 px-4 border border-teal-500 hover:border-transparent  rounded"
        >
          トップに戻る
        </Link>
      </div>
    </form>
  );
}
