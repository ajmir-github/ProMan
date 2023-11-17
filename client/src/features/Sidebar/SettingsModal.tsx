"use client";
import { Modal } from "@/components/Modal";
import { Dispatch } from "react";

const Themes = [
  "light",
  "dark",
  "cupcake",
  "corporate",
  "synthwave",
  "wireframe",
  "business",
  "night",
];

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

      <div>Theme</div>
      <div className="join join-vertical">
        {Themes.map((theme) => (
          <input
            key={theme}
            type="radio"
            name="theme-buttons"
            className="btn theme-controller join-item"
            aria-label={theme}
            value={theme}
          />
        ))}
      </div>
    </Modal>
  );
}
