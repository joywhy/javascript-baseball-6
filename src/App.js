import { MissionUtils } from "@woowacourse/mission-utils";
class App {
  async play() {
    //게임 시작문구를 출력한다.
    //컴퓨터는 1~9까지 서로다른 임의수 3개를 선택
    console.log(MissionUtils.Random.pickNumberInList());
    //사용자에게 서로다른 숫자 3개를 입력받는다. 숫자를 입력해주세요 :
    //컴퓨터의 숫자를 순회하여 사용자의 숫자와 비교한다
    //findindex 로 스트라이크 갯수 변수와 볼 변수 낫싱 변수를 체크한다.
    //세변수 모두 0이라면 3개의 숫자를 모두 맞히셨습니다! 게임 종료 출력하고
    // 게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. 것을 출력한다.
    //입력받은 수가 1이면 시작 2를 하면 종료를 한다.
  }
}

export default App;

const app = new App();
app.play();
