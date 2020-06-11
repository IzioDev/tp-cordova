/// <reference types="cordova-plugin-camera" />

export class Player {
  number: number;
  nickName: string;
  avatarBase64Image: string;
  victoryCount: number;
  defeatCount: number;

  constructor(
    { playerNumber,
      nickName,
      avatarBase64Image,
      victoryCount,
      defeatCount
    }:
      { playerNumber?: number,
        nickName?: string,
        avatarBase64Image?: string
        victoryCount?: number,
        defeatCount?: number,
      })
  {
    this.number = playerNumber;
    this.nickName = nickName;
    this.avatarBase64Image = avatarBase64Image;
    this.victoryCount = victoryCount ?? 0;
    this.defeatCount = defeatCount ?? 0;
  }

  async takeAvatarPicture(): Promise<string> {
    const clientWidth =
      window.innerWidth && document.documentElement.clientWidth
        ? Math.min(window.innerWidth, document.documentElement.clientWidth)
        : window.innerWidth ||
        document.documentElement.clientWidth ||
        document.getElementsByTagName('body')[0].clientWidth;

    const scrollHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    );

    return new Promise((resolve, reject) => {
      window.navigator.camera.getPicture(
        (base64Image) => {
          this.avatarBase64Image = base64Image;
          resolve(base64Image);
        },
        (errorMessage) => reject(errorMessage),
        {
          allowEdit: true,
          targetWidth: clientWidth / 4,
          targetHeight: scrollHeight / 4,
          destinationType: 0
        }
      );
    });
  }

  public static fromLocalStorage(nickname: string): Player | null {
    const strPlayerInfos = localStorage.getItem(`player-${nickname}`);

    if (!strPlayerInfos) {
      return null;
    }

    try {
      const parsedPlayerInfos = JSON.parse(strPlayerInfos);

      return new Player({...parsedPlayerInfos})
    } catch (_) {
      return null;
    }
  }

  public static allFromLocalStorage(): Player[] {
    const players: Player[] = [];

    let index = 0;
    while (true) {
      const key = localStorage.key(index);

      if (key === null) {
        return players;
      }

      if (key.indexOf("player") !== -1) {
        const player = Player.fromLocalStorage(key.replace("player-", ""));

        if (player) {
          players.push(player);
        }
      }

      index++;
    }
  }

  saveToLocalStorage() {
    localStorage.setItem(`player-${this.nickName}`, JSON.stringify({
      nickName: this.nickName,
      avatarBase64Image: this.avatarBase64Image,
      victoryCount: this.victoryCount,
      defeatCount: this.defeatCount,
    }))
  }
}
