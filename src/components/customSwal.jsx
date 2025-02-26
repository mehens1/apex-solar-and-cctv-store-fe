import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content'

const customSwal = withReactContent(Swal);

export const SweetAlert = ({
    icon = "error",
    title = "",
    text = "",
    confirmText = "OK",
    onConfirm = null
}) => {
    customSwal.fire({
        icon: icon,
        title: title,
        text: text,
        confirmText: confirmText,
        confirmButtonColor: icon == "error" ? "#b00202" : "#fa6a02",
        allowEscapeKey: false,
    }).then((result) => {
        if (result.isConfirmed && onConfirm) {
            onConfirm();
        }
    });
}