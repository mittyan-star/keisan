.
├─ README.md
├─ CONTRIBUTING.md
├─ CODEOWNERS
├─ LICENSE
├─ pnpm-workspace.yaml
├─ turbo.json
├─ tsconfig.base.json
├─ docs/
│  ├─ index.md
│  ├─ structure.md # ← このファイル（SSOT）
│  ├─ architecture.md
│  ├─ levels.md # レベル定義書（たし算）
│  ├─ generators.md # 生成仕様（seed/制約/検算）
│  ├─ audio-timer.md # 効果音・タイマー仕様
│  ├─ auth-resume.md # 認証・「昨日の続き」データ設計
│  ├─ diagrams/
│  │  ├─ system.drawio # 図の編集ソース
│  │  └─ system.png    # 図の出力
│  └─ adr/
│     ├─ adr-0001-docs-format.md # SSOTはMarkdown、図はdrawio+PNG
│     └─ adr-0002-static-vs-gen.md # 静的バンク＋動的生成ハイブリッド方針
│
├─ apps/
│  ├─ web/ # フロント（Next.js/React + Tailwind）
│  │  ├─ public/
│  │  │  ├─ audio/
│  │  │  │  ├─ correct.mp3
│  │  │  │  └─ wrong.mp3
│  │  │  └─ icons/
│  │  ├─ src/
│  │  │  ├─ pages/ # /login /dashboard /play /continue
│  │  │  ├─ components/
│  │  │  │  ├─ Timer.tsx
│  │  │  │  ├─ ProblemView.tsx # 横書き/筆算切替
│  │  │  │  ├─ Keypad.tsx
│  │  │  │  ├─ Sound.tsx
│  │  │  │  ├─ ProgressBar.tsx
│  │  │  │  └─ ContinueButton.tsx
│  │  │  ├─ hooks/
│  │  │  │  ├─ useCountdown.ts
│  │  │  │  ├─ useSound.ts
│  │  │  │  └─ useResume.ts
│  │  │  ├─ lib/
│  │  │  │  ├─ apiClient.ts
│  │  │  │  ├─ formatter.ts
│  │  │  │  └─ auth.ts # Firebase Auth 等
│  │  │  └─ app.config.ts # 既定のタイムリミット/音ON-OFF など
│  │  └─ package.json
│  └─ api/ # BFF/API
│     ├─ src/
│     │  ├─ routes/
│     │  │  ├─ generate.ts # 問題生成/配布（静的・動的どちらも）
│     │  │  ├─ session.ts  # セッション開始/提出
│     │  │  └─ progress.ts # 進捗保存・取得（続き）
│     │  ├─ services/
│     │  │  ├─ generator.ts
│     │  │  ├─ scorer.ts
│     │  │  └─ resume.ts
│     │  └─ lib/
│     │     ├─ db.ts   # Firestore/Prisma 等
│     │     └─ auth.ts
│     └─ package.json
│
├─ packages/
│  ├─ core/ # 生成の中核（純粋関数）
│  │  ├─ src/
│  │  │  ├─ rng.ts     # seed付き乱数（再現性）
│  │  │  ├─ ensure.ts  # 制約チェック（繰上/範囲/重複）
│  │  │  ├─ canon.ts   # a+b と b+a の正規化
│  │  │  ├─ add/
│  │  │  │  ├─ twoAddends.ts
│  │  │  │  ├─ threeAddends.ts
│  │  │  │  └─ decimals.ts
│  │  │  ├─ sub/ # 将来拡張
│  │  │  ├─ mul/ # 将来拡張
│  │  │  ├─ div/ # 将来拡張
│  │  │  └─ word/ # 文章題テンプレ適用
│  │  ├─ schemas/
│  │  │  ├─ level.config.schema.json
│  │  │  └─ bank.item.schema.json
│  │  └─ package.json
│  └─ levels/
│     ├─ manifests/ # ← ここに統一（SSOTもこのパスに合わせる）
│     │  └─ addition.manifest.json # レベル→（static/generator/hybrid）
│     ├─ addition/
│     │  ├─ static_banks/
│     │  │  ├─ L01-basic-no-carry/
│     │  │  │  ├─ v1_shard-001.jsonl
│     │  │  │  └─ index.json
│     │  │  ├─ L02-basic-carry-intro/...
│     │  │  └─ L03-ones-domain/...
│     │  └─ generators/
│     │     ├─ L04-tens-groundwork.json
│     │     ├─ L05-columnar-beginner.json
│     │     ├─ L06-3to4digits.json
│     │     ├─ L07-three-addends.json
│     │     ├─ L08-decimals.json
│     │     └─ L10-columnar-intermediate.json
│     ├─ subtraction/
│     ├─ multiplication/
│     ├─ division/
│     └─ schemas/
│        ├─ level.manifest.schema.json
│        └─ README.md
│
├─ data/
│  ├─ word/jp/templates/ # 文章題テンプレ（静的YAML）
│  ├─ word/jp/lexicon.yml # 語彙
│  └─ banks/ # 重み等（digits/decimals/bundles）
│
├─ scripts/
│  ├─ generate.ts     # CLI: 生成→JSON/CSV
│  ├─ export-pdf.ts   # 任意：紙配布用
│  ├─ bake-banks.ts   # 動的→静的プリベイク
│  ├─ shard-index.ts  # index.json 生成
│  └─ audit-banks.ts  # 重複/制約監査
│
├─ tests/
│  ├─ generator.spec.ts
│  ├─ constraints.spec.ts
│  └─ word.spec.ts
├─ .env.example # FIREBASE_/DB接続 等
└─ package.json # ワークスペース管理（pnpm/turbo）
