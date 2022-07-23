export const useStyles = () => {
    return {
        backdrop: {
            bgcolor: "rgba(0, 0, 0, 0.297)",
            backdropFilter: "blur(1px)",
            transition: "all 0.4s ease-in",
        },

        modal: {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "50vw",
            bgcolor: "white",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
        },
    };
};
