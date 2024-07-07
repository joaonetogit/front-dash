import FeaturedIcon from './FeaturedIcon';

export default function DragDropFiles() {
  return (
    <div className="flex-1 rounded-md border border-[#EAECF0] px-6 py-4">
      <div className="flex cursor-pointer flex-col items-center justify-center gap-3">
        <FeaturedIcon />
        <div className="flex flex-col items-center justify-center gap-1 text-sm text-zinc-500">
          <p>
            <span className="font-semibold text-violet-700">Click to upload</span> or drag and drop
          </p>
          <p>SVG, PNG, JPG or GIF (max. 800x400px)</p>
        </div>
      </div>
    </div>
  );
}
