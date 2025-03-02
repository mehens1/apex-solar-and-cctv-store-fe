import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content'

const customSwal = withReactContent(Swal);

export const SweetAlert = ({
    icon = "error",
    title = "",
    text = "",
    confirmText = "OK",
    onConfirm = null,
    actionNeeded = true,
}) => {
    customSwal.fire({
        icon: icon,
        title: title,
        text: text,
        confirmButtonText: confirmText,
        confirmButtonColor: icon == "error" ? "#b00202" : "#fa6a02",
        allowOutsideClick: false,
        allowEscapeKey: false,
        showConfirmButton: actionNeeded
    }).then((result) => {
        if (result.isConfirmed && onConfirm) {
            onConfirm();
        }
    });
}