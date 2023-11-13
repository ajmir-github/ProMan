"use client";
import classes from "@/util/classes";
import { Dispatch, ReactNode } from "react";

export function Modal({
  title,
  open,
  setOpen,
  children,
}: {
  title: string;
  open: boolean;
  setOpen: Dispatch<boolean>;
  children: ReactNode;
}) {
  return (
    <dialog className={classes("modal", open && "modal-open")}>
      <div className="modal-box ">
        <button
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          onClick={() => setOpen(false)}
        >
          ✕
        </button>
        <h3 className="font-bold text-lg">{title}</h3>

        <div className="grid gap-2 mt-4">{children}</div>
      </div>
      {/* <form
        method="dialog"
        className="modal-backdrop"
        onClick={() => setOpen(false)}
      >
        <button>close</button>
      </form> */}
    </dialog>
  );
}
