// "use client"; // 最終的には外すように
import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import MediaCard from "@/components/MediaCard";
import { Container } from "@mui/material";
import {
  QuerySnapshot,
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";

export default function HomePage() {
  return (
    <Container
      maxWidth="sm"
      sx={{
        pb: "4em",
      }}
    >
      <Typography variant="h4" sx={{ textAlign: "center", py: "2rem" }}>
        利用規約
      </Typography>
      {/* <Typography paragraph={true}>以下，作成者は</Typography> */}
      <Typography variant="h5" paragraph={true}>
        禁止事項
      </Typography>
      <ul>
        <li>法令または公序良俗に違反する行為</li>
        <li>犯罪行為に関連する行為</li>
        <li>
          作成者，本サービスの他のユーザー，または第三者のサーバーまたはネットワークの機能を破壊したり，妨害したりする行為
        </li>
        <li>作成者のサービスの運営を妨害するおそれのある行為</li>
        <li>他のユーザーに関する個人情報等を収集または蓄積する行為</li>
        <li>不正アクセスをし，またはこれを試みる行為</li>
        <li>他のユーザーに成りすます行為</li>
        <li>
          作成者のサービスに関連して，反社会的勢力に対して直接または間接に利益を供与する行為
        </li>
        <li>
          作成者，本サービスの他のユーザーまたは第三者の知的財産権，肖像権，プライバシー，名誉その他の権利または利益を侵害する行為
        </li>
        <li>
          作成者が判断する内容を本サービス上に投稿し，または送信する行為
          <ul>
            <li>過度に暴力的な表現</li>
            <li>露骨な性的表現</li>
            <li>
              人種，国籍，信条，性別，社会的身分，門地等による差別につながる表現
            </li>
            <li>自殺，自傷行為，薬物乱用を誘引または助長する表現</li>
            <li>その他反社会的な内容を含み他人に不快感を与える表現</li>
          </ul>
        </li>
        <li>
          作成者が判断する行為
          <ul>
            <li>作成者の認めたものを除きます．）</li>
            <li>性行為やわいせつな行為を目的とする行為</li>
            <li>面識のない異性との出会いや交際を目的とする行為</li>
            <li>他のユーザーに対する嫌がらせや誹謗中傷を目的とする行為</li>
            <li>
              作成者，本サービスの他のユーザー，または第三者に不利益，損害または不快感を与えることを目的とする行為
            </li>
            <li>
              その他本サービスが予定している利用目的と異なる目的で本サービスを利用する行為
            </li>
          </ul>
        </li>
        <li>宗教活動または宗教団体への勧誘行為</li>
        <li>作成者が不適切と判断する行為</li>
      </ul>
      <Typography variant="h5" paragraph={true}>
        免責事項
      </Typography>
      <ul>
        <li>
          作成者は，本サービスに事実上または法律上の瑕疵（安全性，信頼性，正確性，完全性，有効性，特定の目的への適合性，セキュリティなどに関する欠陥，エラーやバグ，権利侵害などを含みます．）がないことを明示的にも黙示的にも保証しておりません．
        </li>
        <li>
          作成者は，本サービスに起因してユーザーに生じたあらゆる損害について、作成者の故意又は重過失による場合を除き、一切の責任を負いません．ただし，本サービスに関する作成者とユーザーとの間の契約（本規約を含みます．）が消費者契約法に定める消費者契約となる場合，この免責規定は適用されません．
        </li>
        <li>
          作成者は，作成者の過失（重過失を除きます．）による債務不履行または不法行為によりユーザーに生じた損害のうち特別な事情から生じた損害（作成者またはユーザーが損害発生につき予見し，または予見し得た場合を含みます．）について一切の責任を負いません．また，作成者の過失（重過失を除きます．）による債務不履行または不法行為によりユーザーに生じた損害の賠償は，一切行いません．
        </li>
        <li>
          作成者は，本サービスに関して，ユーザーと他のユーザーまたは第三者との間において生じた取引，連絡または紛争等について一切責任を負いません．
        </li>
      </ul>
      <Typography paragraph={true}>以上</Typography>
      <Typography>
        上記の利用規約は
        <a href="https://kiyaku.jp/hinagata/sns.html">kiyaku.jp</a>
        さんのものを参考にさせていただきました．
      </Typography>
    </Container>
  );
}
