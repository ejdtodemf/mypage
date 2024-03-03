export default function Main(){
    return(
        <form id="login">
            <div>
                <label className="label">아이디</label>
                <input value="아이디" placeholder="아이디를 입력해주세요" id = "id" type="text"/>
            </div>
            <div>
                <label className="label">비밀번호</label>
                <input value="비밀번호" placeholder="비밀번호를 입력해주세요" id = "password" type="password"/>
            </div>
            <div>
                <button>Login</button>
            </div>
             
        </form>

    )
}