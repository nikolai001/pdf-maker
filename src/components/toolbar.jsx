import '../assets/scss/toolbar.scss'

export default function Toolbar() {
    return (
      <div className="toolbar">
        <button class="material-symbols-outlined">pan_tool</button>
        <button class="material-symbols-outlined">arrow_selector_tool</button>
        <button class="material-symbols-outlined">check_box_outline_blank</button>
        <button class="material-symbols-outlined">title</button>
        <button class="material-symbols-outlined">palette</button>
        <select>
            <option>Montserrat</option>
        </select>
        <button class="material-symbols-outlined">format_align_left</button>
        <button class="material-symbols-outlined">format_align_center</button>
        <button class="material-symbols-outlined">format_align_right</button>
        <button class="material-symbols-outlined">more_horiz</button>
        <button class="material-symbols-outlined">print</button>
        <button class="material-symbols-outlined">download</button>
      </div>
    );
  }