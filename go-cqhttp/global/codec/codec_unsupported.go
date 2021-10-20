//go:build (!arm && !arm64 && !amd64 && !386) || (!windows && !linux && !darwin) || (windows && arm) || (windows && arm64) || race || nosilk
// +build !arm,!arm64,!amd64,!386 !windows,!linux,!darwin windows,arm windows,arm64 race nosilk

package codec

import "errors"

// EncodeToSilk 将音频编码为Silk
func EncodeToSilk(record []byte, tempName string, useCache bool) ([]byte, error) {
	return nil, errors.New("not supported now")
}

// RecodeTo24K 将silk重新编码为 24000 bit rate
func RecodeTo24K(data []byte) []byte {
	return data
}
