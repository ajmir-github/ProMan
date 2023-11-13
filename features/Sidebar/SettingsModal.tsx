"use client";
import { Modal } from "@/components/Modal";
import { Dispatch } from "react";

export default function SettingsModal({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<boolean>;
}) {
  return (
    <Modal title="Settings" open={open} setOpen={setOpen}>
      <div className="grid gap-2">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Full Name</span>
          </label>
          <input className="input input-bordered" type="text" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Bio</span>
          </label>
          <textarea className="textarea textarea-bordered"></textarea>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Profile</span>
          </label>
          <input type="file" className="file-input file-input-bordered" />
        </div>
      </div>
    </Modal>
  );
}
