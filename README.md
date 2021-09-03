## Chức năng
- Tạo ví tron hàng loạt

## Cách dùng

#

#### Tải mã nguồn

```sh
git clone https://github.com/mhqb365/create-wallet-tron.git
cd create-wallet-tron
npm i
```

#### Tạo 1 số lượng ví mới

```sh
node create x
```
x: là số lượng ví cần tạo

#### Kiểm tra 1 số lượng ví mới, đẹp thì lưu

```sh
node create x beauty
```
x: là số lượng ví mới cần kiểm tra

#### Tạo ví mới hàng loạt

```sh
node createLoop
```

#### Kiểm tra ví mới hàng loạt, đẹp thì lưu

```sh
node createBeauty
```

#### Điều kiện địa chỉ ví đẹp được cài đặt tại tệp config.json
```json
{
    "length": 4, // số lượng ký tự kiểm tra ở cuối địa chỉ ví
    "conditions": [
        "mhqb",  // điều kiện ví đẹp
        "bao"  // điều kiện ví đẹp
    ]
}
```