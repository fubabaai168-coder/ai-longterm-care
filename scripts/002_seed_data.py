# 檔案名稱: scripts/002_seed_data.py
# 說明: 此腳本專為 v0 環境設計，用於初始化照服員測試資料。

import os
from supabase import create_client, Client
import random

try:
    # 從環境變數中安全地讀取資料庫連線資訊
    supabase_url = os.environ.get("SUPABASE_URL")
    supabase_key = os.environ.get("SUPABASE_SERVICE_ROLE_KEY")

    if not supabase_url or not supabase_key:
        print("🔴 錯誤：找不到 SUPABASE_URL 或 SUPABASE_SERVICE_ROLE_KEY 環境變數。")
        exit()

    supabase: Client = create_client(supabase_url, supabase_key)
    print("✅ 成功連接到 Supabase 資料庫。")

except Exception as e:
    print(f"🔴 連接到 Supabase 時發生錯誤: {e}")
    exit()

def seed_data():
    """定義並寫入 3 名測試照服員的資料"""

    test_caregivers = [
        {
            "full_name": "測試人員 A",
            "username": "caregiver101",
            "password_hash": "password123", # 警告: 僅供測試，正式上線前必須改為加密雜湊
            "status": "on_duty",
            "skills": ["失智症照護", "重度沐浴"],
            "vehicle": "motorcycle"
        },
        {
            "full_name": "測試人員 B",
            "username": "caregiver102",
            "password_hash": "password123",
            "status": "on_leave",
            "skills": ["烹飪"],
            "vehicle": "car"
        },
        {
            "full_name": "測試人員 C",
            "username": "caregiver103",
            "password_hash": "password123",
            "status": "standby",
            "skills": ["管路更換", "基礎護理"],
            "vehicle": "motorcycle"
        }
    ]

    try:
        # 為了讓腳本可重複執行，先清空所有舊資料
        print("🗑️ 正在清空舊的照服員資料...")
        supabase.table("caregivers").delete().neq('id', '00000000-0000-0000-0000-000000000000').execute()
        print("✅ 舊資料已清空。")

        # 寫入新的 3 筆測試資料
        print(f"⏳ 準備寫入 {len(test_caregivers)} 筆新的測試資料...")
        response = supabase.table("caregivers").insert(test_caregivers).execute()

        if len(response.data) > 0:
            print(f"🎉 成功寫入 {len(response.data)} 筆測試資料！")
        else:
            print("🔴 寫入資料失敗，請檢查 Supabase 的權限或表格結構。")
            if hasattr(response, 'error'):
                print(f"錯誤訊息: {response.error}")

    except Exception as e:
        print(f"🔴 執行資料庫操作時發生錯誤: {e}")

if __name__ == "__main__":
    print("--- 開始執行照服員資料初始化腳本 ---")
    seed_data()
    print("--- 腳本執行完畢 ---")
    # 檔案名稱: scripts/002_seed_data.py
# 說明: 此腳本專為 v0 環境設計，用於初始化照服員測試資料。

import os
from supabase import create_client, Client
import random

try:
    # 從環境變數中安全地讀取資料庫連線資訊
    supabase_url = os.environ.get("SUPABASE_URL")
    supabase_key = os.environ.get("SUPABASE_SERVICE_ROLE_KEY")

    if not supabase_url or not supabase_key:
        print("🔴 錯誤：找不到 SUPABASE_URL 或 SUPABASE_SERVICE_ROLE_KEY 環境變數。")
        exit()

    supabase: Client = create_client(supabase_url, supabase_key)
    print("✅ 成功連接到 Supabase 資料庫。")

except Exception as e:
    print(f"🔴 連接到 Supabase 時發生錯誤: {e}")
    exit()

def seed_data():
    """定義並寫入 3 名測試照服員的資料"""

    test_caregivers = [
        {
            "full_name": "測試人員 A",
            "username": "caregiver101",
            "password_hash": "password123", # 警告: 僅供測試，正式上線前必須改為加密雜湊
            "status": "on_duty",
            "skills": ["失智症照護", "重度沐浴"],
            "vehicle": "motorcycle"
        },
        {
            "full_name": "測試人員 B",
            "username": "caregiver102",
            "password_hash": "password123",
            "status": "on_leave",
            "skills": ["烹飪"],
            "vehicle": "car"
        },
        {
            "full_name": "測試人員 C",
            "username": "caregiver103",
            "password_hash": "password123",
            "status": "standby",
            "skills": ["管路更換", "基礎護理"],
            "vehicle": "motorcycle"
        }
    ]

    try:
        # 為了讓腳本可重複執行，先清空所有舊資料
        print("🗑️ 正在清空舊的照服員資料...")
        supabase.table("caregivers").delete().neq('id', '00000000-0000-0000-0000-000000000000').execute()
        print("✅ 舊資料已清空。")

        # 寫入新的 3 筆測試資料
        print(f"⏳ 準備寫入 {len(test_caregivers)} 筆新的測試資料...")
        response = supabase.table("caregivers").insert(test_caregivers).execute()

        if len(response.data) > 0:
            print(f"🎉 成功寫入 {len(response.data)} 筆測試資料！")
        else:
            print("🔴 寫入資料失敗，請檢查 Supabase 的權限或表格結構。")
            if hasattr(response, 'error'):
                print(f"錯誤訊息: {response.error}")

    except Exception as e:
        print(f"🔴 執行資料庫操作時發生錯誤: {e}")

if __name__ == "__main__":
    print("--- 開始執行照服員資料初始化腳本 ---")
    seed_data()
    print("--- 腳本執行完畢 ---")