class MyRenderer {
    constructor() {
        document.addEventListener("DOMContentLoaded", () => {
            document.getElementById("comment-form").onsubmit = () => {
                const commentInput: HTMLInputElement = <HTMLInputElement>document.getElementById("comment-input");

                if (commentInput.value === "") {
                    return false;
                }

                const newComment: HTMLLIElement = document.createElement("li");
                newComment.innerText = commentInput.value;
                document.getElementById("comments").appendChild(newComment);

                commentInput.value = "";
                return false;
            }
        });
    }
}

const myrenderer = new MyRenderer();
